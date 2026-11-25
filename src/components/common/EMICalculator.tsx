import React, { useState } from 'react';
import { IndianRupee, Calculator, CheckCircle2 } from 'lucide-react';

interface EMICalculatorProps {
  onApplyLoan?: () => void;
}

export const EMICalculator: React.FC<EMICalculatorProps> = ({ onApplyLoan }) => {
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // 50 Lakh default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  // Calculate EMI
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalAmountPayable = emi * totalMonths;
  const totalInterestPayable = totalAmountPayable - loanAmount;

  // Format currency in Indian standard
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-luxury overflow-hidden p-6 sm:p-8">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-950">
            Home Loan EMI Calculator
          </h3>
          <p className="text-xs text-slate-500">
            Estimate your monthly repayment schedule and total interest
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Loan Amount
              </label>
              <span className="text-sm font-bold text-navy-900 bg-slate-100 px-3 py-1 rounded-lg">
                {formatINR(loanAmount)}
              </span>
            </div>
            <input
              type="range"
              min="500000"
              max="30000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹5 Lakh</span>
              <span>₹1.5 Cr</span>
              <span>₹3 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Interest Rate (p.a.)
              </label>
              <span className="text-sm font-bold text-navy-900 bg-slate-100 px-3 py-1 rounded-lg">
                {interestRate}%
              </span>
            </div>
            <input
              type="range"
              min="6.5"
              max="15.0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>6.5%</span>
              <span>10.5%</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-700">
                Loan Tenure (Years)
              </label>
              <span className="text-sm font-bold text-navy-900 bg-slate-100 px-3 py-1 rounded-lg">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Calculated Result Box */}
        <div className="lg:col-span-5 bg-navy-950 text-white p-6 rounded-2xl border border-navy-800 shadow-xl space-y-5">
          <div>
            <div className="text-[11px] text-gold-400 uppercase tracking-wider font-semibold">
              Monthly Equated Installment (EMI)
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              {formatINR(emi)}
              <span className="text-xs font-normal text-slate-300 ml-1">/ month</span>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-navy-800 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Principal Amount:</span>
              <span className="font-semibold text-slate-200">{formatINR(loanAmount)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400">Total Interest Payable:</span>
              <span className="font-semibold text-gold-400">{formatINR(totalInterestPayable)}</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-navy-800/80">
              <span className="text-slate-300 font-medium">Total Amount Payable:</span>
              <span className="font-bold text-white text-sm">{formatINR(totalAmountPayable)}</span>
            </div>
          </div>

          {onApplyLoan && (
            <button
              onClick={onApplyLoan}
              className="w-full btn-gold py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md mt-4"
            >
              Get Home Loan Guidance
            </button>
          )}

          <p className="text-[10px] text-slate-400 leading-tight">
            *Indicative calculation. Final loan terms, interest rates, and sanction are determined by partner lending institutions.
          </p>
        </div>
      </div>
    </div>
  );
};
