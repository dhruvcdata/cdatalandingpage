import React from 'react';

const WebsiteTermsOfUse: React.FC = () => {
    return (
        <div className="bg-background pt-[20vh] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8">Website Terms of Use</h1>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <p className="mb-4">
                            These Terms of Use govern your use of the CData website (the "Site"). By accessing or using the Site,
                            you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree
                            with any of these terms, you are prohibited from using or accessing this Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
                        <ol className="list-decimal pl-6 space-y-4">
                            <li>
                                Permission is granted to temporarily view the materials (information or software) on CData's website
                                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                                title, and under this license you may not:
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>modify or copy the materials;</li>
                                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>attempt to decompile or reverse engineer any software contained on CData's website;</li>
                                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                                </ul>
                            </li>
                            <li>
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated
                                by CData at any time. Upon terminating your viewing of these materials or upon the termination of this license,
                                you must destroy any downloaded materials in your possession whether in electronic or printed format.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
                        <ol className="list-decimal pl-6 space-y-4">
                            <li>
                                The materials on CData's website are provided on an 'as is' basis. CData makes no warranties, expressed
                                or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
                                or other violation of rights.
                            </li>
                            <li>
                                Further, CData does not warrant or make any representations concerning the accuracy, likely results, or
                                reliability of the use of the materials on its website or otherwise relating to such materials or on any
                                sites linked to this site.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
                        <p className="mb-4">
                            In no event shall CData or its suppliers be liable for any damages (including, without limitation, damages
                            for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
                            materials on CData's website, even if CData or a CData authorized representative has been notified orally or
                            in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied
                            warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Accuracy of Materials</h2>
                        <p className="mb-4">
                            The materials appearing on CData's website could include technical, typograCical, or CotograCic errors.
                            CData does not warrant that any of the materials on its website are accurate, complete or current. CData may
                            make changes to the materials contained on its website at any time without notice. However, CData does not make
                            any commitment to update the materials.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Links</h2>
                        <p className="mb-4">
                            CData has not reviewed all of the sites linked to its website and is not responsible for the contents of any
                            such linked site. The inclusion of any link does not imply endorsement by CData of the site. Use of any such
                            linked website is at the user's own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>
                        <p className="mb-4">
                            CData may revise these terms of service for its website at any time without notice. By using this website you
                            are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                        <p className="mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws of Minnesota and you
                            irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms of Use, please contact us:
                        </p>
                        <div className="pl-6">
                            <p>By email: info@CdataInsights.com</p>

                        </div>
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

export default WebsiteTermsOfUse;