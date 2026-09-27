import { test, expect } from '@playwright/test';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';
const BASE_URL = 'http://localhost:3000';

const newCategoryName = `E2E Test Category ${Date.now()}`;
const newProductName = `E2E Test Product ${Date.now()}`;
const newProductPrice = '19.99';
const newProductStock = '50';

test.describe('Full E-Commerce Flow', () => {
  test('should allow admin to create a product and a customer to purchase it', async ({ page }) => {
    // --- 1. Admin Login ---
    await page.goto(`${BASE_URL}/#/admin/login`);
    await page.fill('input[type="password"]', ADMIN_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page.locator('h1')).toHaveText('Admin Dashboard');

    // --- 2. Create Category ---
    await page.getByRole('tab', { name: 'Categories' }).click();
    await page.fill('input[placeholder="Category Name"]', newCategoryName);
    await page.getByRole('button', { name: 'Save Category' }).click();
    await expect(page.locator(`li:has-text("${newCategoryName}")`)).toBeVisible({ timeout: 5000 });

    // --- 3. Create Product ---
    await page.getByRole('tab', { name: 'Products' }).click();
    await page.getByRole('button', { name: 'Add Product' }).click();

    // Fill out the product modal
    const modal = page.locator('[role="dialog"]');
    await modal.locator('input[placeholder="Name"]').fill(newProductName);
    await modal.locator('input[placeholder="Price"]').fill(newProductPrice);
    await modal.locator('input[placeholder="Stock"]').fill(newProductStock);
    await modal.locator('select').selectOption({ label: newCategoryName });
    await modal.locator('textarea[placeholder="Description"]').fill('A delicious product for E2E testing.');
    await modal.getByRole('button', { name: 'Save Product' }).click();

    // Verify product is in the admin list
    await expect(page.locator(`td:has-text("${newProductName}")`)).toBeVisible({ timeout: 5000 });

    // --- 4. Navigate to Storefront and Find Product ---
    await page.goto(`${BASE_URL}/#/shop`);
    
    // Filter by the new category to find the product easily
    await page.getByRole('button', { name: newCategoryName, exact: true }).click();
    
    const productCard = page.locator(`.group:has-text("${newProductName}")`);
    await expect(productCard).toBeVisible();
    await expect(productCard.locator('span:has-text("$19.99")')).toBeVisible();

    // --- 5. Add to Cart ---
    await productCard.getByRole('button', { name: `Add ${newProductName} to cart` }).click();
    
    // Verify cart count updated
    await expect(page.locator('a[href="#/cart"] span')).toHaveText('1');

    // --- 6. Proceed to Checkout ---
    await page.goto(`${BASE_URL}/#/cart`);
    await expect(page.locator(`p:has-text("${newProductName}")`)).toBeVisible();
    await page.getByRole('link', { name: 'Proceed to Checkout' }).click();

    // --- 7. Fill Checkout Form and Place Order ---
    await expect(page.locator('h1')).toHaveText('Checkout');
    await page.fill('input[name="name"]', 'E2E Test Customer');
    await page.fill('input[name="email"]', 'e2e-customer@test.com');
    await page.fill('input[name="phone"]', '+11234567890');
    await page.fill('textarea[name="address"]', '123 Test Street, Test City, 12345');
    
    // Select "Pay on Delivery"
    await page.locator('div:has-text("Pay on Delivery")').first().click();

    await page.getByRole('button', { name: 'Place Order' }).click();

    // --- 8. Verify Order Success ---
    await expect(page.locator('h1')).toHaveText('Thank you for your order!', { timeout: 10000 });
    const orderReference = await page.locator('p:has-text("Order ID:")').textContent();
    expect(orderReference).toContain('ORD-');

    // --- 9. Admin Verification ---
    await page.goto(`${BASE_URL}/#/admin`);
    await expect(page.locator('h1')).toHaveText('Admin Dashboard');
    await page.getByRole('tab', { name: 'Orders' }).click();

    // Find the order we just placed
    const orderRow = page.locator(`div:has-text("${orderReference}")`);
    await expect(orderRow).toBeVisible();
    await expect(orderRow.locator('div:has-text("Pending")')).toBeVisible();
    await expect(orderRow.locator('span:has-text("$19.99")')).toBeVisible();

    // --- 10. Cleanup (Optional but good practice) ---
    // Open order details
    await orderRow.click();
    const orderDetails = page.locator(`div:has-text("Customer Details")`);
    await expect(orderDetails).toBeVisible();

    // Change status to Completed
    await page.locator('select[id^="status-"]').selectOption('Completed');
    await expect(orderRow.locator('div:has-text("Completed")')).toBeVisible({ timeout: 5000 });
  });
});

/**
 * To run this test:
 * 1. Install Playwright: `npm install -D @playwright/test`
 * 2. Initialize Playwright: `npx playwright install`
 * 3. Ensure your dev server is running on http://localhost:3000
 * 4. Ensure your backend server is running on http://localhost:4000
 * 5. Set the ADMIN_PASSWORD environment variable if it's not 'admin'.
 * 6. Run the test: `npx playwright test e2e/full-flow.spec.ts`
 */