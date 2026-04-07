export default function CodeOfConduct() {
  return (
    <div className="min-h-screen star-bg text-gray-200 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b1a]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-display text-sm">
          <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="text-white">CSI</span>
            <span className="text-rose-500">hacks</span>
          </a>
          <a href="/" className="text-gray-300 hover:text-rose-400 transition-colors text-xs font-display">
            ← BACK TO HOME
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Terminal Header */}
          <div className="font-mono text-lg md:text-xl text-gray-400 mb-4">
            $ cat <span className="text-white font-bold">CODE_OF_CONDUCT.md</span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl text-white pixel-shadow mb-2">
            CODE OF CONDUCT
          </h1>
          <h2 className="font-display text-sm md:text-base text-rose-400 mb-2">
            Anti-Harassment Policy
          </h2>
          <p className="font-mono text-gray-400 text-base mb-12">
            Effective: June 20th, 2026 &bull; csihacks.com
          </p>

          <div className="space-y-10 font-mono text-lg leading-relaxed">

            {/* I. Purpose */}
            <Section title="I. Purpose">
              <p>
                CSI Hacks is committed to providing a safe, inclusive, and productive environment for all participants,
                organizers, mentors, judges, sponsors, and volunteers (collectively, "Participants"). This Code of Conduct and
                Anti-Harassment Policy (this "Policy") sets forth the standards of behavior expected of all individuals in
                attendance at or in connection with the CSI Hacks hackathon (the "Event"). Participation in the Event
                constitutes acceptance of and agreement to comply with this Policy in its entirety.
              </p>
            </Section>

            {/* II. Scope */}
            <Section title="II. Scope">
              <p className="mb-4">
                This Policy applies to all Participants and governs conduct in all Event-related contexts, including but not limited to:
              </p>
              <ul className="space-y-2 list-none">
                <BulletItem>The physical venue (Zoho Corporation, Pleasanton, CA) and all adjacent areas used in connection with the Event;</BulletItem>
                <BulletItem>All digital communications, platforms, and channels used in connection with the Event;</BulletItem>
                <BulletItem>Social interactions before, during, and after Event hours that arise from participation in the Event; and</BulletItem>
                <BulletItem>Any official or unofficial Event-affiliated gatherings or activities.</BulletItem>
              </ul>
            </Section>

            {/* III. Expected Conduct */}
            <Section title="III. Expected Conduct">
              <p className="mb-4">
                All Participants are expected to conduct themselves in a manner consistent with the following standards:
              </p>
              <ol className="space-y-3 list-none">
                <NumberedItem n={1}>Treat all individuals with dignity, courtesy, and respect, regardless of age, race, ethnicity, national origin, gender, gender identity or expression, sexual orientation, disability, religion, socioeconomic status, or level of technical experience.</NumberedItem>
                <NumberedItem n={2}>Engage in constructive collaboration and refrain from conduct that demeans, intimidates, or excludes others.</NumberedItem>
                <NumberedItem n={3}>Respect the intellectual property and personal property of all Participants and third parties.</NumberedItem>
                <NumberedItem n={4}>Comply with all applicable laws, regulations, and venue rules throughout the duration of the Event.</NumberedItem>
                <NumberedItem n={5}>Refrain from the use, possession, or distribution of alcohol, controlled substances, or any other prohibited items at the Event.</NumberedItem>
                <NumberedItem n={6}>Maintain appropriate boundaries in all interpersonal interactions and respect others' right to withdraw consent at any time.</NumberedItem>
                <NumberedItem n={7}>Comply with all directions issued by CSI Hacks organizers and venue staff.</NumberedItem>
              </ol>
            </Section>

            {/* IV. Prohibited Conduct */}
            <Section title="IV. Prohibited Conduct">
              <p className="mb-6">
                The following conduct is strictly prohibited and will not be tolerated under any circumstances:
              </p>

              <SubSection title="A. Harassment">
                <p className="mb-4">
                  Harassment includes, but is not limited to, any unwelcome verbal, written, or physical conduct directed at an
                  individual or group that has the purpose or effect of creating an intimidating, hostile, or offensive
                  environment. Examples include:
                </p>
                <ul className="space-y-2">
                  <BulletItem>Offensive, derogatory, or discriminatory comments, slurs, or jokes;</BulletItem>
                  <BulletItem>Unwelcome sexual advances, requests for sexual favors, or other conduct of a sexual nature;</BulletItem>
                  <BulletItem>Deliberate intimidation, stalking, or persistent unwanted contact;</BulletItem>
                  <BulletItem>Inappropriate physical contact or invasion of personal space without consent; and</BulletItem>
                  <BulletItem>Sharing or displaying sexually explicit, violent, or otherwise inappropriate material.</BulletItem>
                </ul>
              </SubSection>

              <SubSection title="B. Discrimination">
                <p>
                  Discrimination on the basis of any protected characteristic, including but not limited to race, ethnicity,
                  national origin, gender, gender identity or expression, sexual orientation, disability, religion, or age, is strictly
                  prohibited.
                </p>
              </SubSection>

              <SubSection title="C. Academic and Intellectual Dishonesty">
                <p>
                  Participants shall not submit work that is not their own, misrepresent the origin or authorship of submitted
                  projects, or engage in any other form of cheating or dishonesty in connection with the Event.
                </p>
              </SubSection>

              <SubSection title="D. Disruption">
                <p>
                  Participants shall not engage in conduct that unreasonably disrupts the Event, including but not limited to
                  deliberate interference with presentations, hacking activities, judging, or other official Event proceedings.
                </p>
              </SubSection>

              <SubSection title="E. Unauthorized Use of Systems">
                <p>
                  Participants shall not attempt to gain unauthorized access to any computer system, network, account, or data,
                  whether belonging to other Participants, the venue, sponsors, or any third party. Hacking in the malicious
                  sense is expressly prohibited.
                </p>
              </SubSection>
            </Section>

            {/* V. Reporting Violations */}
            <Section title="V. Reporting Violations">
              <p className="mb-4">
                Any Participant who experiences, witnesses, or becomes aware of conduct that violates this Policy is strongly
                encouraged to report it promptly. Reports may be made by:
              </p>
              <ul className="space-y-2 mb-4">
                <BulletItem>Directly approaching any CSI Hacks organizer present at the Event;</BulletItem>
                <BulletItem>Contacting the CSI Hacks organizing team via the official contact information listed at csihacks.com; or</BulletItem>
                <BulletItem>Requesting that a trusted third party submit a report on your behalf.</BulletItem>
              </ul>
              <p>
                All reports will be taken seriously and handled with discretion. Participants who make good-faith reports of
                Policy violations will not be subject to retaliation. Knowingly filing a false report, however, is itself a
                violation of this Policy.
              </p>
            </Section>

            {/* VI. Enforcement */}
            <Section title="VI. Enforcement and Consequences">
              <p className="mb-4">
                CSI Hacks organizers reserve the right to take any action they deem appropriate in response to a violation of
                this Policy, up to and including:
              </p>
              <ol className="space-y-2 list-none">
                <NumberedItem n={1}>A verbal or written warning;</NumberedItem>
                <NumberedItem n={2}>Removal from the Event without a refund of any registration fees or prize eligibility;</NumberedItem>
                <NumberedItem n={3}>A permanent ban from future CSI Hacks events;</NumberedItem>
                <NumberedItem n={4}>Notification of the relevant institution (e.g., school, employer) of the Participant; and/or</NumberedItem>
                <NumberedItem n={5}>Referral to appropriate law enforcement authorities.</NumberedItem>
              </ol>
              <p className="mt-4">
                Organizers' determinations regarding violations and consequences are final. CSI Hacks organizers are not
                obligated to provide warnings prior to removal in cases of egregious or threatening conduct.
              </p>
            </Section>

            {/* VII. Confidentiality */}
            <Section title="VII. Confidentiality">
              <p>
                The CSI Hacks organizing team will handle all reports and related information with reasonable confidentiality
                to the extent practicable. The identity of reporting Participants will not be disclosed without their consent,
                except where disclosure is required by law or necessary to prevent imminent harm.
              </p>
            </Section>

            {/* VIII. Amendments */}
            <Section title="VIII. Amendments">
              <p>
                The CSI Hacks organizing team reserves the right to amend or update this Policy at any time. Participants will
                be notified of material changes via the official Event channels. Continued participation in the Event following
                notice of any amendment constitutes acceptance of the revised Policy.
              </p>
            </Section>

            {/* IX. Contact */}
            <Section title="IX. Contact">
              <p>
                For questions regarding this Policy or to submit a report, please visit{' '}
                <span className="text-cyan-400">csihacks.com</span> or contact the organizing team directly at the Event.
              </p>
            </Section>

            {/* Footer acknowledgement */}
            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="text-gray-400 italic text-base">
                By registering for and participating in CSI Hacks, all Participants acknowledge that they have read,
                understood, and agree to be bound by this Code of Conduct and Anti-Harassment Policy.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-base md:text-lg text-cyan-400 mb-4 border-b border-cyan-400/30 pb-2">
        {title}
      </h2>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-display text-xs md:text-sm text-rose-400 mb-3">{title}</h3>
      <div className="text-gray-300">{children}</div>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-rose-500 mt-0.5 shrink-0">&gt;</span>
      <span>{children}</span>
    </li>
  );
}

function NumberedItem({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-cyan-400 shrink-0">{n}.</span>
      <span>{children}</span>
    </li>
  );
}
