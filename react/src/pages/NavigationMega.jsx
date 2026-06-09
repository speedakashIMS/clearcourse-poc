import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import NavigationMega from '../components/NavigationMega';

function NavigationPage() {
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="">
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Navigation Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Navigation component examples and variants</p>
          </div>
        </div>
      </div>




      <div className="py-20">
        <div className="container space-y-40">
          <div className="text-grey-600">
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Contained</h2>
            <p className="text-body-default">Navigation with links aligned next to buttons.</p>
          </div>
        </div>

        <div className="">
          <NavigationMega
            variant="light"
            logo="https://placehold.co/120x40?text=Logo"
            navItems={[
              { label: 'Home', href: '#' },
              {
                label: 'Products',
                href: '#',
                mega: {
                  variant: 'tabs',
                  tabs: [
                    {
                      label: 'Platforms',
                      columns: [
                        {
                          title: 'Core',
                          links: [
                            { label: 'Analytics', href: '#' },
                            { label: 'Automation', href: '#' },
                            { label: 'Security', href: '#' },
                          ],
                        },
                        {
                          title: 'Integrations',
                          links: [
                            { label: 'Salesforce', href: '#' },
                            { label: 'HubSpot', href: '#' },
                            { label: 'Slack', href: '#' },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Services',
                      columns: [
                        {
                          title: 'Managed',
                          links: [
                            { label: 'Onboarding', href: '#' },
                            { label: 'Migration', href: '#' },
                            { label: 'Support', href: '#' },
                          ],
                        },
                        {
                          title: 'Professional',
                          links: [
                            { label: 'Consulting', href: '#' },
                            { label: 'Training', href: '#' },
                            { label: 'Workshops', href: '#' },
                          ],
                        },
                        {
                          title: 'Partners',
                          links: [
                            { label: 'Find a Partner', href: '#' },
                            { label: 'Become a Partner', href: '#' },
                            { label: 'Partner Portal', href: '#' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
              {
                label: 'Resources',
                href: '#',
                mega: {
                  variant: 'columns',
                  columns: [
                    {
                      title: 'Learn',
                      links: [
                        { label: 'Documentation', href: '#' },
                        { label: 'API Reference', href: '#' },
                        { label: 'Tutorials', href: '#' },
                      ],
                    },
                    {
                      title: 'Community',
                      links: [
                        { label: 'Forum', href: '#' },
                        { label: 'Events', href: '#' },
                        { label: 'Blog', href: '#' },
                      ],
                    },
                    {
                      title: 'Company',
                      links: [
                        { label: 'About Us', href: '#' },
                        { label: 'Careers', href: '#' },
                        { label: 'Press', href: '#' },
                      ],
                    },
                    {
                      title: 'Legal',
                      links: [
                        { label: 'Privacy', href: '#' },
                        { label: 'Terms', href: '#' },
                        { label: 'Security', href: '#' },
                      ],
                    },
                  ],
                },
              },
              { label: 'Pricing', href: '#' },
              { label: 'Contact', href: '#' },
            ]}
            buttons={[
              { text: 'Button', variant: 'dark', href: '#' },
              { text: 'Button', variant: 'dark', href: '#' },
            ]}
          />
        </div>
      </div>
      
      <div className="container">
        <div className="text-grey-600">
          <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Full Width + Right Aligned Nav</h2>
          <p className="text-body-default">Full-width navigation with links aligned next to buttons.</p>
        </div>
      </div>

      <div className="">
        <NavigationMega
          fullWidth
          alignNavRight
          variant="light"
          logo="https://placehold.co/120x40?text=Logo"
          navItems={[
            {
              label: 'Solutions',
              href: '#',
              mega: {
                variant: 'columns',
                columns: [
                  {
                    title: 'Industries',
                    links: [
                      { label: 'Financial Services', href: '#' },
                      { label: 'Healthcare', href: '#' },
                      { label: 'Retail', href: '#' },
                    ],
                  },
                  {
                    title: 'Use Cases',
                    links: [
                      { label: 'Customer Support', href: '#' },
                      { label: 'Fraud Detection', href: '#' },
                      { label: 'Data Pipelines', href: '#' },
                    ],
                  },
                  {
                    title: 'Outcomes',
                    links: [
                      { label: 'Reduce Costs', href: '#' },
                      { label: 'Improve CX', href: '#' },
                      { label: 'Speed to Market', href: '#' },
                    ],
                  },
                  {
                    title: 'Services',
                    links: [
                      { label: 'Advisory', href: '#' },
                      { label: 'Implementation', href: '#' },
                      { label: 'Optimization', href: '#' },
                    ],
                  },
                  {
                    title: 'Support',
                    links: [
                      { label: 'Help Center', href: '#' },
                      { label: 'Contact Support', href: '#' },
                      { label: 'Status', href: '#' },
                    ],
                  },
                ],
              },
            },
            {
              label: 'Platform',
              href: '#',
              mega: {
                variant: 'tabs',
                tabs: [
                  {
                    label: 'Overview',
                    columns: [
                      {
                        title: 'Capabilities',
                        links: [
                          { label: 'Dashboards', href: '#' },
                          { label: 'Workflows', href: '#' },
                          { label: 'Automation', href: '#' },
                        ],
                      },
                      {
                        title: 'Security',
                        links: [
                          { label: 'SSO', href: '#' },
                          { label: 'SAML', href: '#' },
                          { label: 'Audit Logs', href: '#' },
                        ],
                      },
                    ],
                  },
                  {
                    label: 'Developers',
                    columns: [
                      {
                        title: 'APIs',
                        links: [
                          { label: 'REST API', href: '#' },
                          { label: 'Webhooks', href: '#' },
                          { label: 'SDKs', href: '#' },
                        ],
                      },
                      {
                        title: 'Tools',
                        links: [
                          { label: 'CLI', href: '#' },
                          { label: 'Sandbox', href: '#' },
                          { label: 'Changelog', href: '#' },
                        ],
                      },
                      {
                        title: 'Guides',
                        links: [
                          { label: 'Quickstart', href: '#' },
                          { label: 'Migration Guide', href: '#' },
                          { label: 'Best Practices', href: '#' },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              label: 'Resources',
              href: '#',
              mega: {
                variant: 'columns',
                columns: [
                  {
                    title: 'Learn',
                    links: [
                      { label: 'Documentation', href: '#' },
                      { label: 'API Reference', href: '#' },
                      { label: 'Tutorials', href: '#' },
                    ],
                  },
                  {
                    title: 'Community',
                    links: [
                      { label: 'Forum', href: '#' },
                      { label: 'Events', href: '#' },
                      { label: 'Blog', href: '#' },
                    ],
                  },
                  {
                    title: 'Company',
                    links: [
                      { label: 'About Us', href: '#' },
                      { label: 'Careers', href: '#' },
                      { label: 'Press', href: '#' },
                    ],
                  },
                ],
              },
            },
            {
              label: 'Pricing',
              href: '#',
              mega: {
                variant: 'columns',
                columns: [
                  {
                    title: 'Plans',
                    links: [
                      { label: 'Starter', href: '#' },
                      { label: 'Growth', href: '#' },
                      { label: 'Enterprise', href: '#' },
                    ],
                  },
                  {
                    title: 'Compare',
                    links: [
                      { label: 'Plan Comparison', href: '#' },
                      { label: 'Feature Matrix', href: '#' },
                      { label: 'FAQ', href: '#' },
                    ],
                  },
                ],
              },
            },
            {
              label: 'Company',
              href: '#',
              mega: {
                variant: 'columns',
                columns: [
                  {
                    title: 'About',
                    links: [
                      { label: 'Our Story', href: '#' },
                      { label: 'Leadership', href: '#' },
                      { label: 'Careers', href: '#' },
                    ],
                  },
                  {
                    title: 'News',
                    links: [
                      { label: 'Press', href: '#' },
                      { label: 'Announcements', href: '#' },
                      { label: 'Blog', href: '#' },
                    ],
                  },
                ],
              },
            },
            {
              label: 'Contact',
              href: '#',
              mega: {
                variant: 'columns',
                columns: [
                  {
                    title: 'Get in Touch',
                    links: [
                      { label: 'Sales', href: '#' },
                      { label: 'Support', href: '#' },
                      { label: 'Partners', href: '#' },
                    ],
                  },
                ],
              },
            },
          ]}
          buttons={[
            { text: 'Button', variant: 'dark', href: '#' },
            { text: 'Button', variant: 'dark', href: '#' },
          ]}
        />
      </div>

    </div>
  );
}

export default NavigationPage;

