import PrivacyHead from "./_components/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <>
      <PrivacyHead />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-extrabold mb-10 text-center">Privacy Policy</h1>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Welcome to LinguaAI. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services. By accessing our site, you agree to the practices described herein.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We collect the following types of information:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Account Information:</strong> Email, username, and password.</li>
                  <li><strong>Usage Data:</strong> How you interact with our services, including translation messages and generated MP3 files.</li>
                  <li><strong>Payment Information:</strong> Processed securely through Stripe.</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We use your information to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Provide and maintain our services.</li>
                  <li>Manage your account and authenticate your access.</li>
                  <li>Process payments securely via Stripe.</li>
                  <li>Improve our services based on usage data.</li>
                  <li>Communicate with you about updates, promotions, and support.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing and Disclosure */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We do not sell or rent your personal information to third parties. However, we may share your data in the following circumstances:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Service Providers:</strong> Trusted third parties like Stripe who assist in operating our services.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                </ul>
                <p className="mt-4">
                  <strong>Stripe:</strong> All payment transactions are processed securely through Stripe. We do not store your payment information on our servers. For more details, please refer to Stripe&apos;s Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
                  <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete data.</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data under certain conditions.</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your personal data.</li>
                  <li><strong>Objection:</strong> Object to processing your personal data for specific purposes.</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided in the <strong>Contact Us</strong> section below.
                </p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking Technologies */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content. Cookies are small data files stored on your device that help us recognize your browser and remember certain information.
                </p>
                <p className="mt-4">
                  You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
                </p>
              </CardContent>
            </Card>

            {/* Changes to This Privacy Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you have any questions about this Privacy Policy, your rights, or our data practices, please contact us at:
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
  );
};

export default PrivacyPage;
