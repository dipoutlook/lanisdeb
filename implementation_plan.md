# Implementation Plan - eCommerce Backend Hardening & Features

We have completed the background API audit. While the basic endpoints function correctly (27/27 passing tests), there are critical missing eCommerce systems in the data model logic. This plan details the required fixes and recommended features.

## User Review Required

> [!IMPORTANT]
> **Inventory Integrity Risk:** Currently, orders do not decrement stock, nor does the checkout endpoint validate whether the ordered quantity exceeds available inventory. We propose implementing automated stock validation and reduction on checkout, and restoring stock if an order is cancelled.
> 
> **Transactional Security:** We will wrap order creation and inventory updates inside a database transaction to prevent database inconsistency on network/execution failures.

## Open Questions

> [!NOTE]
> 1. **Stock Recovery on Cancel:** If an admin updates an order status to `Cancelled`, should the items be automatically restocked? *(Proposed: Yes)*
> 2. **Notification Service:** Should we implement a real email dispatch using `nodemailer` (requires SMTP credentials), or is a mock email logger in the backend server logs sufficient for local dev? *(Proposed: Mock logger)*

---

## Proposed Changes

### Component 1: Checkout & Inventory Management

#### [MODIFY] [orders.ts](file:///c:/Users/TV/Desktop/DESKTOP%20FILES/LANISDEBB/server/src/routes/orders.ts)
- Modify `buildOrderSnapshot` to check if a product has sufficient stock. If `item.quantity > product.stock`, throw an error specifying which product is out of stock.
- Update `createOrder` to perform stock validation and deduction inside a Prisma transaction:
  1. Retrieve products matching the requested IDs and lock them (if possible) or double check stock.
  2. Throw error if any items are insufficient.
  3. Create the `Order` record.
  4. Decrement the `stock` count of each `Product` record by the ordered quantity.
- Update the patch order status route (`PATCH /admin/orders/:id/status`):
  - If the status is updated to `Cancelled` from a non-Cancelled state, increment product stock back.
  - If the status is updated *from* `Cancelled` back to `Pending` or `Completed`, validate and decrement stock again.

---

### Component 2: Frontend Dashboard Enhancements

#### [MODIFY] [OrderSuccessPage.tsx](file:///c:/Users/TV/Desktop/DESKTOP%20FILES/LANISDEBB/pages/OrderSuccessPage.tsx)
- Add a "Print Receipt" button that triggers `window.print()` using print-specific CSS rules to hide headers/footers, formatting the receipt beautifully.

#### [MODIFY] [AdminPage.tsx](file:///c:/Users/TV/Desktop/DESKTOP%20FILES/LANISDEBB/pages/AdminPage.tsx)
- Add a filter bar to the `OrderManager` component to filter orders by Status (`All`, `Pending`, `Completed`, `Cancelled`) and Search term (Order Reference, Customer Name, or Email).

---

## Verification Plan

### Automated Tests
- Run the PowerShell API test script.
- Add new test scenarios in the test script:
  1. Attempt checkout with quantity > stock → expect rejection.
  2. Verify product stock is decremented after a successful checkout.
  3. Verify product stock is restored after changing order status to `Cancelled`.

### Manual Verification
- Verify the "Print Receipt" formatting in print preview.
- Test Order list filters in the admin dashboard.
