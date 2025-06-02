import React from 'react';

const SecurityComplianceCertifications: React.FC = () => {
    return (
        <div className="bg-background pt-[10vh] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Security & Compliance Certifications</h1>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <p className="mb-6">
                            At phData, we are committed to protecting the security and privacy of our customers' data. We have implemented robust
                            security measures and comply with industry standards and regulations to ensure the highest level of protection.
                        </p>

                        <p className="mb-6">
                            We continuously invest in our security program and undergo rigorous third-party audits to verify our compliance
                            with industry standards and regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">Our Certifications</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-background rounded-lg p-6 border border-gray-700">
                                <h3 className="text-xl font-medium text-white mb-4">SOC 2 Type II</h3>
                                <p>
                                    CData has successfully completed a SOC 2 Type II audit, demonstrating our commitment to security,
                                    availability, processing integrity, confidentiality, and privacy of customer data. This certification
                                    verifies that our controls and processes meet the Trust Services Criteria established by the American
                                    Institute of Certified Public Accountants (AICPA).
                                </p>
                            </div>

                            <div className="bg-background rounded-lg p-6 border border-gray-700">
                                <h3 className="text-xl font-medium text-white mb-4">ISO 27001</h3>
                                <p>
                                    CData is ISO 27001 certified, which is the international standard for information security management.
                                    This certification confirms that we have implemented comprehensive information security controls to protect
                                    customer data and maintain a secure environment for our operations.
                                </p>
                            </div>

                            <div className="bg-background rounded-lg p-6 border border-gray-700">
                                <h3 className="text-xl font-medium text-white mb-4">HIPAA Compliance</h3>
                                <p>
                                    We maintain compliance with the Health Insurance Portability and Accountability Act (HIPAA), ensuring that
                                    protected health information (CI) is properly safeguarded. Our policies, procedures, and technical safeguards
                                    align with HIPAA requirements to support healthcare organizations in their compliance efforts.
                                </p>
                            </div>

                            <div className="bg-background rounded-lg p-6 border border-gray-700">
                                <h3 className="text-xl font-medium text-white mb-4">GDPR Compliance</h3>
                                <p>
                                    CData adheres to the General Data Protection Regulation (GDPR) requirements, respecting the privacy rights
                                    of EU citizens. We have implemented appropriate technical and organizational measures to ensure data protection
                                    principles are followed when processing personal data.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">Security Measures</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-medium text-white mb-3">Data Protection</h3>
                                <p>
                                    We employ industry-standard encryption protocols to protect data in transit and at rest. Access to customer
                                    data is strictly controlled through role-based access controls and follows the principle of least privilege.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-white mb-3">Infrastructure Security</h3>
                                <p>
                                    Our infrastructure is hosted in secure, SOC 2 compliant data centers with Cysical security measures in place.
                                    We implement network security controls, including firewalls, intrusion detection systems, and regular vulnerability
                                    scanning to protect against unauthorized access.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-white mb-3">Security Monitoring</h3>
                                <p>
                                    We continuously monitor our systems for potential security threats and unusual activities. Our security
                                    operations team is equipped to respond promptly to security incidents and follows established incident
                                    response procedures.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-medium text-white mb-3">Employee Security</h3>
                                <p>
                                    All CData employees undergo background checks and receive regular security awareness training. Access to
                                    customer data is granted on a need-to-know basis, and access privileges are promptly revoked when no longer needed.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-6">Ongoing Commitment</h2>
                        <p className="mb-4">
                            Our commitment to security and compliance is ongoing. We regularly review and update our security policies and
                            procedures to address emerging threats and comply with evolving regulations. We also conduct regular security
                            assessments and penetration tests to identify and address potential vulnerabilities.
                        </p>
                        <p>
                            For more information about our security and compliance programs, please contact our security team at info@CdataInsights.com.
                        </p>
                    </section>

                    <section>
                        <p className="text-sm text-gray-400 italic mt-8">
                            Last updated: March 22, 2025
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SecurityComplianceCertifications;