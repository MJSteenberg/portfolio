import React from 'react'

type Role = {
  company: string
  title: string
  period: string
  location: string
  summary: string
  bullets?: string[]
  link?: string
}

const roles: Role[] = [
  {
    company: 'VoiceMap Audio Tours',
    title: 'Data Analyst',
    period: 'Jul 2024 – Present',
    location: 'Cape Town, Western Cape (Hybrid)',
    summary: 'Leveraging data to drive KPIs.'
  },
  {
    company: 'Mark1',
    title: 'Data Analyst',
    period: 'Nov 2021 – Jun 2024',
    location: 'Cape Town, Western Cape',
    summary:
      'Lead Data Analyst for top South African brands across verticals—implementation, tracking, analysis, and reporting. Enabling accurate KPI tracking and multi-channel performance insights. Always Evolving!'
  },
  {
    company: 'Unome Packaging®',
    title: 'Data Analyst',
    period: 'Aug 2021 – Oct 2021',
    location: 'Cape Town, Western Cape',
    summary:
      'Implemented and maintained data systems and processes, ensuring data accuracy and improved operations.'
  },
  {
    company: 'Freelance',
    title: 'Part-time Web Developer',
    period: 'Mar 2021 – Oct 2021',
    location: 'Cape Town, Western Cape',
    summary:
      'Delivered responsive web solutions with high performance and scalability through client collaboration.'
  },
  {
    company: 'THE IT TEAM',
    title: 'Junior Data Scientist',
    period: 'May 2021 – Aug 2021',
    location: 'Cape Town, Western Cape',
    summary: 'CRM implementation and BI dashboard design.'
  },
  {
    company: 'Telkom',
    title: 'Intern Data Scientist',
    period: 'Sep 2020 – Dec 2020',
    location: 'Cape Town, Western Cape',
    summary:
      'Led the Customer Marketing Intelligence team using Pandas and PowerBI for insights and BI Dashboards. Achieved top ranking in international hackathon.',
    link:
      'https://zindi.africa/competitions/edsa-to-vaccinate-or-not-to-vaccinate-its-not-a-question/leaderboard'
  },
  {
    company: 'ExploreAI Academy',
    title: 'Student Intern',
    period: 'Jan 2020 – Dec 2020',
    location: 'Cape Town, Western Cape',
    summary:
      'Hands-on experience in data science and machine learning: data analysis, Python, and visualization; foundation for a career in Data Science.'
  }
]

export function ExperienceTimeline(): JSX.Element {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-white/0 via-white/20 to-white/0" />

      <ol className="space-y-10 md:space-y-14">
        {roles.map((role, idx) => (
          <li key={`${role.company}-${idx}`} className="relative">
            <div className="md:grid md:grid-cols-12 md:items-start md:gap-8">
              <div className="md:col-span-5 md:text-right md:pr-8">
                <div className="text-sm ink-subtle">{role.period}</div>
                <div className="text-sm opacity-60">{role.location}</div>
              </div>

              <div className="md:col-span-7">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_0_3px_rgba(255,255,255,0.06)]" />
                  <div>
                    <h3 className="text-xl md:text-2xl text-ink">
                      {role.title} · <span className="ink-muted">{role.company}</span>
                    </h3>
                    <p className="mt-2 ink-muted max-w-prose">{role.summary}</p>
                    {role.link && (
                      <a className="mt-3 inline-block btn" href={role.link} target="_blank" rel="noreferrer">
                        View achievement
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}


