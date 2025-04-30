export const dataPlans = [
  {
    name: 'Starter',
    price: {
      monthly: 0,
      yearly: 0
    },
    description: 'Perfect for trying out CodeLib for your personal projects.',
    features: [
      { name: 'Up to 3 projects', included: true },
      { name: 'Basic components', included: true },
      { name: 'Community support', included: true },
      { name: 'Light/Dark theme', included: true },
      { name: 'Basic documentation', included: true },
      { name: 'Email support', included: false },
      { name: 'Premium components', included: false },
      { name: 'Advanced features', included: false }
    ],
    popular: false,
    color: 'border-chart-3'
  },
  {
    name: 'Pro',
    price: {
      monthly: 49,
      yearly: 39
    },
    description: 'For individuals and small teams building professional apps.',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'All components', included: true },
      { name: 'Priority support', included: true },
      { name: 'Custom themes', included: true },
      { name: 'Full documentation', included: true },
      { name: 'Email support', included: true },
      { name: 'Premium components', included: true },
      { name: 'Advanced features', included: false }
    ],
    popular: true,
    color: 'border-primary'
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 99,
      yearly: 89
    },
    description: 'For organizations with advanced needs and larger teams.',
    features: [
      { name: 'Unlimited projects', included: true },
      { name: 'All components', included: true },
      { name: 'Dedicated support', included: true },
      { name: 'Custom themes', included: true },
      { name: 'Full documentation', included: true },
      { name: 'Email support', included: true },
      { name: 'Premium components', included: true },
      { name: 'Advanced features', included: true }
    ],
    popular: false,
    color: 'border-chart-2'
  }
]
