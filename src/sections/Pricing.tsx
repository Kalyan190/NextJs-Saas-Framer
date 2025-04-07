"use client";
import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
   {
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
         "Up to 5 project members",
         "Unlimited tasks and projects",
         "2GB storage",
         "Integrations",
         "Basic support",
      ],
   },
   {
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
         "Up to 50 project members",
         "Unlimited tasks and projects",
         "50GB storage",
         "Integrations",
         "Priority support",
         "Advanced support",
         "Export support",
      ],
   },
   {
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
         "Up to 5 project members",
         "Unlimited tasks and projects",
         "200GB storage",
         "Integrations",
         "Dedicated account manager",
         "Custom fields",
         "Advanced analytics",
         "Export capabilities",
         "API access",
         "Advanced security features",
      ],
   },
];

const TierCard = ({ title, monthlyPrice, buttonText, popular, inverse, features }: typeof pricingTiers[0]) => {
   return (
      <div className={twMerge('card p-6 rounded-2xl shadow-md w-full max-w-sm', inverse && 'bg-black text-white border-black')}>
         <div className="flex justify-between items-center">
            <h3 className={twMerge('text-lg font-bold text-black/50', inverse && 'text-white/60')}>{title}</h3>
            {popular && (
               <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  <motion.span
                     animate={{ backgroundPositionX: '100%' }}
                     transition={{ duration: 1, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                     className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                  >
                     Popular
                  </motion.span>
               </div>
            )}
         </div>

         <div className="flex items-baseline gap-1 mt-6">
            <span className="text-4xl font-bold tracking-tighter">${monthlyPrice}</span>
            <span className={twMerge('tracking-tight font-bold', inverse ? 'text-white/50' : 'text-black/50')}>/month</span>
         </div>

         <button className={twMerge('btn btn-primary w-full mt-6', inverse && 'bg-white text-black')}>
            {buttonText}
         </button>

         <ul className="flex flex-col gap-4 mt-8">
            {features.map((feature, index) => (
               <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckIcon className="h-6 w-6" />
                  <span>{feature}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export const Pricing = () => {
   return (
      <section className="py-24 bg-white">
         <div className="container">
            <div className="max-w-[540px] mx-auto text-center">
               <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                  Pricing
               </h2>
               <p className="text-[20px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
                  Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
               </p>
            </div>

            <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
               {pricingTiers.map((tier, index) => (
                  <TierCard key={index} {...tier} />
               ))}
            </div>
         </div>
      </section>
   );
};
