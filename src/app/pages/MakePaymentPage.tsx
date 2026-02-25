import { CreditCard, DollarSign, ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { FlagIcon } from '@/app/components/FlagIcon';
import { CurrencyDropdown } from '@/app/components/CurrencyDropdown';
import { CountryDropdown } from '@/app/components/CountryDropdown';
import { CustomCheckbox } from '@/app/components/CustomCheckbox';
import { PaymentMethodCard, InlineLogoVisa, InlineLogoMastercard, InlineLogoAmex } from '@/app/components/PaymentMethodCard';
import { CVVTooltip } from '@/app/components/CVVTooltip';
import CardsPaymentMethod from '@/imports/CardsPaymentMethod';
import CardsPaymentMethodPayPal from '@/imports/CardsPaymentMethod-34-3868';
import PaypalForm from '@/imports/Form';
import imgSecurityLogos from "figma:asset/d529c0a93117e197c2eb048ee3615f94f75bc339.png";
import imgPaypalSecurityLogos from "figma:asset/eb00e11750240406151235ff321ed68201176c13.png";

export default function MakePaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit-card');
  const [showCvvTooltip, setShowCvvTooltip] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    currency: 'USD',
    paymentFor: [] as string[],
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    firstName: '',
    lastName: '',
    country: '',
    stateProvince: '',
    city: '',
    address: '',
    zipCode: '',
    agreeTerms: false,
    note: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePaymentForChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      paymentFor: prev.paymentFor.includes(option)
        ? prev.paymentFor.filter(item => item !== option)
        : [...prev.paymentFor, option]
    }));
  };

  const paymentMethods = [
    { id: 'credit-card', name: 'Credit or Debit card', icons: ['VISA', 'MC', 'JCB'] },
    { id: 'paypal', name: 'PayPal', icons: [] },
    { id: 'other', name: 'Other', icons: [] }
  ];

  const currencies = [
    { code: 'USD', name: 'USD' },
    { code: 'EUR', name: 'EUR' },
    { code: 'GBP', name: 'GBP' },
    { code: 'SGD', name: 'SGD' },
    { code: 'HKD', name: 'HKD' }
  ];

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'SG', name: 'Singapore' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' }
  ];

  const paymentForOptions = [
    'Government Fee',
    'Incorporation',
    'Account Opening Consultancy',
    'Apply Merchant Account Online',
    'Virtual Office & Local Phone Number',
    'Others'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-[#C91F26] transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-[#C91F26]">Make Payment</span>
          </div>
          <h1 className="text-4xl font-bold text-[#2C2C2C] mb-3">Secure Online Payment</h1>
          <div className="h-1 w-24 bg-[#C91F26]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Payment Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {/* Amount and Currency */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="col-span-2">
                  <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', e.target.value)}
                    placeholder="Enter amount"
                    className="w-full h-[42px] px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Currency
                  </label>
                  <CurrencyDropdown
                    value={formData.currency}
                    onChange={(value) => handleInputChange('currency', value)}
                    currencies={currencies}
                  />
                </div>
              </div>

              {/* Payment For */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-3">
                  Payment for
                </label>
                <div className="space-y-3">
                  {paymentForOptions.map((option) => (
                    <CustomCheckbox
                      key={option}
                      checked={formData.paymentFor.includes(option)}
                      onChange={() => handlePaymentForChange(option)}
                      label={option}
                    />
                  ))}
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                  Note (Maximum 50 characters)
                </label>
                <textarea
                  value={formData.note}
                  onChange={(e) => handleInputChange('note', e.target.value)}
                  placeholder="Type your note"
                  maxLength={50}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {/* Select Payment Method */}
              <div className="mb-8">
                <h3 className="font-bold text-[#2C2C2C] mb-4 text-lg border-b-2 border-[#C91F26] pb-2">
                  Select your payment method
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PaymentMethodCard
                    type="credit-card"
                    selected={selectedPaymentMethod === 'credit-card'}
                    onClick={() => setSelectedPaymentMethod('credit-card')}
                  />
                  <div 
                    className={`cursor-pointer transition-all ${selectedPaymentMethod === 'other' ? 'ring-2 ring-[#C91F26]' : ''}`}
                    onClick={() => setSelectedPaymentMethod('other')}
                  >
                    <CardsPaymentMethod />
                  </div>
                  <div 
                    className={`cursor-pointer transition-all ${selectedPaymentMethod === 'paypal' ? 'ring-2 ring-[#C91F26]' : ''}`}
                    onClick={() => setSelectedPaymentMethod('paypal')}
                  >
                    <CardsPaymentMethodPayPal />
                  </div>
                </div>
              </div>

              {/* Credit Card Form */}
              {(selectedPaymentMethod === 'credit-card' || selectedPaymentMethod === 'other') && (
                <>
                  {/* Card Info Section */}
                  <div className="mb-8">
                    <h3 className="font-bold text-[#2C2C2C] mb-4 text-lg border-b-2 border-[#C91F26] pb-2">
                      Credit Card or Debit Card Info
                    </h3>

                    {/* Card Number */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="•••• •••• •••• ••••"
                          maxLength={19}
                          className="w-full px-4 py-2 pr-[130px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2 items-center">
                          {selectedPaymentMethod === 'credit-card' && (
                            <>
                              <InlineLogoVisa />
                              <InlineLogoMastercard />
                            </>
                          )}
                          {selectedPaymentMethod === 'other' && (
                            <InlineLogoAmex />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expiry Date and CVV */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          Expiry Date
                        </label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <select
                              value={formData.expiryMonth}
                              onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                              className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white"
                            >
                              <option value="">Month</option>
                              {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                <option key={month} value={month.toString().padStart(2, '0')}>
                                  {month.toString().padStart(2, '0')}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                          <div className="relative flex-1">
                            <select
                              value={formData.expiryYear}
                              onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                              className="w-full appearance-none px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white"
                            >
                              <option value="">Year</option>
                              {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i).map(year => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2 flex items-center gap-2">
                          CVV
                          <CVVTooltip />
                        </label>
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          placeholder="•••"
                          maxLength={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Information */}
                  <div className="mb-6">
                    <h3 className="font-bold text-[#2C2C2C] mb-4 text-lg border-b-2 border-[#C91F26] pb-2">
                      Billing Information
                    </h3>

                    <div className="space-y-4">
                      {/* First Name */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Type your first name"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Type your last name"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>

                      {/* Country */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          Country
                        </label>
                        <CountryDropdown
                          value={formData.country}
                          onChange={(value) => handleInputChange('country', value)}
                          countries={countries}
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Type your address"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>

                      {/* City/County */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          City/County
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Type your city/county"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>

                      {/* State/Province/Region */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          State/Province/Region
                        </label>
                        <input
                          type="text"
                          value={formData.stateProvince}
                          onChange={(e) => handleInputChange('stateProvince', e.target.value)}
                          placeholder="Type your state/province/region"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>

                      {/* ZIP/Postal code */}
                      <div>
                        <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                          ZIP/Postal code
                        </label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          placeholder="Type your postal code"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-6">
                    <CustomCheckbox
                      checked={formData.agreeTerms}
                      onChange={() => handleInputChange('agreeTerms', !formData.agreeTerms)}
                      label={
                        <span className="text-sm text-gray-600">
                          I have read and agreed{' '}
                          <a href="#" className="text-[#C91F26] hover:underline font-semibold">
                            Terms and Conditions
                          </a>
                        </span>
                      }
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#C91F26] text-white py-3 rounded font-bold text-lg hover:bg-[#a51920] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Proceed to Payment
                  </button>

                  {/* Security Logos */}
                  <div className="mt-4 flex justify-center">
                    <img 
                      src={imgSecurityLogos} 
                      alt="Verified by VISA and MasterCard SecureCode" 
                      className="h-[30px] object-contain"
                    />
                  </div>
                </>
              )}

              {/* PayPal Option */}
              {selectedPaymentMethod === 'paypal' && (
                <div className="py-4">
                  <PaypalForm />
                  
                  {/* Terms and Conditions */}
                  <div className="mb-6 mt-6">
                    <CustomCheckbox
                      checked={formData.agreeTerms}
                      onChange={() => handleInputChange('agreeTerms', !formData.agreeTerms)}
                      label={
                        <span className="text-sm text-gray-600">
                          I have read and agreed{' '}
                          <a href="#" className="text-[#C91F26] hover:underline font-semibold">
                            Terms and Conditions
                          </a>
                        </span>
                      }
                    />
                  </div>

                  {/* Proceed to Payment Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#C91F26] text-white py-3 rounded font-bold text-lg hover:bg-[#a51920] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Proceed to Payment
                  </button>

                  {/* Security Logos */}
                  <div className="mt-4 flex justify-center">
                    <img 
                      src={imgPaypalSecurityLogos} 
                      alt="Verified by VISA and MasterCard SecureCode" 
                      className="h-[30px] object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}