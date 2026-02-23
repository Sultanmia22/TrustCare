# Stripe Payment Integration Guide

## Setup Instructions

### 1. Create Stripe Account
- Go to [Stripe Dashboard](https://dashboard.stripe.com)
- Sign up or log in to your account
- Navigate to Developers > API Keys

### 2. Get Your API Keys
1. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
2. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

### 4. Database Schema Update
Make sure your bookings collection includes these fields:
```javascript
{
  _id: ObjectId,
  // ... existing fields
  paymentStatus: "unpaid" | "paid",
  paymentIntentId: String,
  paidAt: Date
}
```

## How It Works

### Payment Flow
1. User clicks "Pay" button on the booking
2. Payment modal opens with card input form
3. Payment intent is created on the server
4. Card information is processed
5. Payment is confirmed and booking status is updated to "paid"

### File Structure
```
src/
├── action/server/
│   └── payment.js          # Stripe API integration
├── Components/MyBooking/
│   ├── BookingInfo.jsx     # Main booking table with Pay button
│   └── PaymentModal.jsx    # Payment form modal
```

## API Endpoints

### `createPaymentIntent(amount, bookingId, email)`
- Creates a Stripe payment intent
- Returns: `{ success, clientSecret, paymentIntentId }`

### `confirmPayment(paymentIntentId, bookingId)`
- Confirms the payment and updates booking status
- Returns: `{ success, message, paymentStatus, bookingStatus }`

## Testing

### Test Card Numbers
- **Visa**: `4242 4242 4242 4242`
- **Visa (decline)**: `4000 0000 0000 0002`
- **Amex**: `3782 822463 10005`

- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits (e.g., 123)

## Frontend Components

### PaymentModal Component
Located in `src/Components/MyBooking/PaymentModal.jsx`
- Handles card input with validation
- Formats card number, expiry, and CVC
- Shows amount to pay
- Handles payment submission and error handling

### BookingInfo Component
Located in `src/Components/MyBooking/BookingInfo.jsx`
- Displays booking data in table
- Pay button triggers payment modal
- Updates table after successful payment

## Troubleshooting

### Payment Intent Creation Fails
- Check that Stripe secret key is correctly set in `.env.local`
- Verify the key starts with `sk_test_` or `sk_live_`

### Modal Not Showing
- Ensure DaisyUI is properly configured
- Check browser console for errors
- Verify PaymentModal is imported in BookingInfo

### Payment Status Not Updating
- Check MongoDB connection is working
- Verify booking collection exists
- Check database user has write permissions

## Production Deployment

1. Replace test keys with live keys
2. Set `STRIPE_SECRET_KEY=sk_live_...`
3. Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...`
4. Enable webhook verification for security
5. Test thoroughly with real payment amounts

## Security Notes

- Never expose `STRIPE_SECRET_KEY` in client-side code
- Always verify payment on the server
- Use HTTPS in production
- Validate all inputs on server
- Implement webhook verification for additional security
