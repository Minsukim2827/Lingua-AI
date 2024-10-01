import React from 'react';
import { Globe, Zap, Shield } from 'lucide-react';

export default function FeatureSection() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to translate
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            LinguaAI combines cutting-edge AI technology with a user-friendly interface to provide unparalleled translation services.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">100+ Languages</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Translate between over 100 languages with high accuracy and natural-sounding results.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Lightning Fast</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Get instant translations for text, documents, and websites with our powerful AI engine.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure & Private</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Your data is encrypted and never stored, ensuring maximum privacy and security.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">API Integration</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Easily integrate our translation services into your applications with our robust API.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
