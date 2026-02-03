import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are your delivery hours?',
      answer: 'We deliver 7 days a week from 8 AM to 9 PM. You can choose your preferred delivery slot during checkout.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is confirmed, you will receive a tracking link via email and SMS. You can also track your order by logging into your account and visiting the "Orders" section.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with your purchase, you can return it within 24 hours of delivery for a full refund. Fresh produce must be in its original condition.',
    },
    {
      question: 'Do you offer organic products?',
      answer: 'Yes! We have a wide range of certified organic fruits, vegetables, and groceries. Look for the "Organic" badge on product listings.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, UPI payments, net banking, and cash on delivery. All online payments are secure and encrypted.',
    },
    {
      question: 'Is there a minimum order value?',
      answer: 'No, there is no minimum order value. However, orders above $30 qualify for free delivery.',
    },
    {
      question: 'How do you ensure product freshness?',
      answer: 'All our products are sourced directly from farms and suppliers daily. We use temperature-controlled storage and delivery vehicles to maintain freshness.',
    },
    {
      question: 'Can I modify my order after placing it?',
      answer: 'Yes, you can modify your order within 1 hour of placing it. Contact our customer support or use the "Modify Order" option in your account.',
    },
    {
      question: 'Do you have a loyalty program?',
      answer: 'Yes! Join our BlueBerry Rewards program to earn points on every purchase, get exclusive discounts, and early access to new products.',
    },
    {
      question: 'What if an item is out of stock?',
      answer: 'If an item in your order is out of stock, we will contact you immediately with alternative options or issue a refund for that item.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-neutral-600">
          Find answers to common questions about our service
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="card overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-neutral-900 flex-1">
                {faq.question}
              </h3>
              <svg
                className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent-blue/10 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">
          Still have questions?
        </h2>
        <p className="text-neutral-600 mb-6">
          Our customer support team is here to help you
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+919876543210" className="btn-primary">
            Call Us: +91 98765 43210
          </a>
          <a href="mailto:support@blueberry.com" className="btn-secondary">
            Email: support@blueberry.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
