// app/terms/page.tsx

import TermsHead from "./_components/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <>
      <TermsHead />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-extrabold mb-10 text-center">Terms of Service</h1>

            {/* 1. Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Welcome to LinguaAI. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services (&quot;Service&quot;). By accessing or using our Service, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Service.
                </p>
              </CardContent>
            </Card>

            {/* 2. Definitions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">2. Definitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>&quot;Service&quot;</strong> refers to the translation tools and related services provided by LinguaAI.
                </p>
                <p className="mt-4">
                  <strong>&quot;User&quot;</strong> refers to any individual or entity that accesses or uses the Service.
                </p>
              </CardContent>
            </Card>

            {/* 3. User Obligations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">3. User Obligations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Users agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
                <p className="mt-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Infringe upon the intellectual property rights of others.</li>
                  <li>Transmit any harmful or malicious code.</li>
                  <li>Engage in fraudulent or deceptive activities.</li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. Account Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">4. Account Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  When you create an account with us, you must provide accurate and complete information. You are responsible for updating your information to keep it accurate and for safeguarding your password. LinguaAI reserves the right to suspend or terminate your account if any information provided is found to be inaccurate or incomplete.
                </p>
              </CardContent>
            </Card>

            {/* 5. Intellectual Property */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  All content, trademarks, logos, and software on the website are the property of LinguaAI or their respective owners. Users are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes. Any unauthorized use of the content may violate copyright, trademark, and other laws.
                </p>
              </CardContent>
            </Card>

            {/* 6. Termination */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">6. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We reserve the right to terminate or suspend your access to the Service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or us. Upon termination, all rights granted to you under these Terms will immediately cease.
                </p>
              </CardContent>
            </Card>

            {/* 7. Disclaimers and Limitation of Liability */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">7. Disclaimers and Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. LinguaAI does not warrant that the Service will be uninterrupted, error-free, or free from viruses or other harmful components.
                </p>
                <p className="mt-4">
                  In no event shall LinguaAI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Your access to or use of the Service;</li>
                  <li>Any conduct or content of any third party on the Service;</li>
                  <li>Any content obtained from the Service;</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                </ul>
              </CardContent>
            </Card>

            {/* 8. Governing Law */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">8. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  These Terms are governed by and construed in accordance with the laws of New Zealand. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of New Zealand.
                </p>
              </CardContent>
            </Card>

            {/* 9. Changes to These Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">9. Changes to These Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update our Terms from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            {/* 10. Contact Us */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="mt-4">
                  <a href="mailto:support@linguaai.com" className="text-primary hover:underline">
                    support@linguaai.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}

export default TermsPage
