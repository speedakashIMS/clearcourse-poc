import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Testimonial from "../components/Testimonials";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function TestimonialPage() {
  const sampleTestimonials = [
    {
      testimonial: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
      name: 'John Doe',
      role: 'CEO, Company Name',
      imageUrl: 'https://placehold.co/120x120?text=JD',
      rating: 5,
    },
    {
      testimonial: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      name: 'Jane Smith',
      role: 'CTO, Tech Corp',
      imageUrl: 'https://placehold.co/120x120?text=JS',
      rating: 4,
    },
    {
      testimonial: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."',
      name: 'Bob Johnson',
      role: 'Director, Marketing',
      imageUrl: 'https://placehold.co/120x120?text=BJ',
      rating: 3,
    },
    {
      testimonial: '"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."',
      name: 'Alice Williams',
      role: 'VP, Sales',
      imageUrl: 'https://placehold.co/120x120?text=AW',
      rating: 5,
    },
    {
      testimonial: '"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."',
      name: 'Charlie Brown',
      role: 'Founder, Startup Inc',
      imageUrl: 'https://placehold.co/120x120?text=CB',
      rating: 4,
    },
    {
      testimonial: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."',
      name: 'Diana Prince',
      role: 'Manager, Operations',
      imageUrl: 'https://placehold.co/120x120?text=DP',
      rating: 3,
    },
    {
      testimonial: '"Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."',
      name: 'Edward Norton',
      role: 'Lead Developer',
      imageUrl: 'https://placehold.co/120x120?text=EN',
      rating: 5,
    },
    {
      testimonial: '"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."',
      name: 'Fiona Green',
      role: 'Product Manager',
      imageUrl: 'https://placehold.co/120x120?text=FG',
      rating: 4,
    },
    {
      testimonial: '"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."',
      name: 'George Wilson',
      role: 'Senior Developer',
      imageUrl: 'https://placehold.co/120x120?text=GW',
      rating: 3,
    },
    {
      testimonial: '"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
      name: 'Helen Davis',
      role: 'Design Lead',
      imageUrl: 'https://placehold.co/120x120?text=HD',
      rating: 5,
    },
    {
      testimonial: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment."',
      name: 'Ian Martinez',
      role: 'Product Owner',
      imageUrl: 'https://placehold.co/120x120?text=IM',
      rating: 4,
    },
    {
      testimonial: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."',
      name: 'Julia Anderson',
      role: 'UX Researcher',
      imageUrl: 'https://placehold.co/120x120?text=JA',
      rating: 3,
    },
    {
      testimonial: '"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain."',
      name: 'Kevin Taylor',
      role: 'Frontend Engineer',
      imageUrl: 'https://placehold.co/120x120?text=KT',
      rating: 5,
    },
    {
      testimonial: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."',
      name: 'Laura Garcia',
      role: 'Backend Developer',
      imageUrl: 'https://placehold.co/120x120?text=LG',
      rating: 4,
    },
    {
      testimonial: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."',
      name: 'Laura Garcia',
      role: 'Backend Developer',
      imageUrl: 'https://placehold.co/120x120?text=LG',
      rating: 3,
    },
  ];

  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          <div className="">
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Testimonial Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Display customer testimonials with flexible layouts. Choose from media-enhanced testimonials
              or column-based grid layouts with slider support.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          {/* 1. 1 testimonial with media */}
          <section>
            <IntroductionHeader
              title="1 Testimonial with Media"
              description="Carousel with 1 testimonial + 1 media per slide."
            />
            <Spacer height={40} />
              <Testimonial
                variant="media"
                testimonials={[
                  {
                    ...sampleTestimonials[0],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600',
                      title: 'Customer Success Story'
                    }
                  }
                ]}
                order="testimonial-first"
                mediaPosition="with-name"
              />
            <Spacer height={40} />
          </section>

          {/* 2. 3 testimonials with media */}
          <section>
            <IntroductionHeader
              title="3 Testimonials with Media"
              description="Carousel with image media."
            />
            <Spacer height={40} />
              <Testimonial
                variant="media"
                testimonials={[
                  {
                    ...sampleTestimonials[0],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600?random=20',
                      title: 'Customer Success Image'
                    }
                  },
                  {
                    ...sampleTestimonials[1],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600?random=21',
                      title: 'Customer Success Image'
                    }
                  },
                  {
                    ...sampleTestimonials[2],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600?random=22',
                      title: 'Customer Success Image'
                    }
                  },
                ]}
                order="testimonial-first"
                mediaPosition="with-name"
              />
            <Spacer height={40} />
          </section>

          {/* 3. Carousel - 1 testimonial per slide */}
          <section>
            <IntroductionHeader
              title="Carousel - 1 Testimonial per Slide"
              description="Carousel with one testimonial per slide and no media."
            />
            <Spacer height={40} />
              <Testimonial
                variant="media"
                testimonials={sampleTestimonials.slice(0, 3)}
                align="center"
              />
            <Spacer height={40} />
          </section>

          {/* 4. Carousel - 2 Columns per Slide */}
          <section>
            <IntroductionHeader
              title="Carousel - 2 Columns"
              description="Carousel with two testimonials per slide."
            />
            <Spacer height={40} />
              <Testimonial
                variant="columns"
                testimonials={sampleTestimonials.slice(0, 6)}
                columns={2}
                carousel
              />
            <Spacer height={40} />
          </section>

          {/* 5. Carousel - 3 Columns per Slide */}
          <section>
            <IntroductionHeader
              title="Carousel - 3 Columns"
              description="Carousel with three testimonials per slide."
            />
            <Spacer height={40} />
              <Testimonial
                variant="columns"
                testimonials={sampleTestimonials.slice(0, 9)}
                columns={3}
                carousel
              />
            <Spacer height={40} />
          </section>

          {/* 6. Columns - 1 column */}
          <section>
            <IntroductionHeader
              title="Columns - 1 Column"
              description="Single column, full width."
            />
            <Spacer height={40} />
              <Testimonial
                variant="columns"
                testimonials={sampleTestimonials.slice(0, 1)}
                columns={1}
                align="center"
              />
            <Spacer height={40} />
          </section>

          {/* 7. Columns - 2 columns */}
          <section>
            <IntroductionHeader
              title="Columns - 2 Columns"
              description="Two-column grid layout."
            />
              <Testimonial
                variant="columns"
                testimonials={sampleTestimonials.slice(0, 2)}
                columns={2}
              />
            <Spacer height={40} />
          </section>

          {/* 8. Columns - 3 columns */}
          <section>
            <IntroductionHeader
              title="Columns - 3 Columns"
              description="Three-column grid layout."
            />
            <Spacer height={40} />
              <Testimonial
                variant="columns"
                testimonials={sampleTestimonials.slice(0, 3)}
                columns={3}
              />
            <Spacer height={40} />
          </section>

          {/* 9. Stacked media with testimonials */}
          <section>
            <IntroductionHeader
              title="Stacked Media with 3 Testimonials"
              description="Two-column layout with one shared media and 3 testimonials stacked vertically. No slider - all testimonials are always displayed."
            />
            <Spacer height={40} />
              <Testimonial
                variant="stacked-media"
                testimonials={sampleTestimonials.slice(0, 3)}
                media={{
                  type: 'image',
                  imageUrl: 'https://picsum.photos/800/1200?random=50',
                  title: 'Customer Success Stories'
                }}
                order="testimonial-first"
              />
            <Spacer height={40} />
          </section>

        </div>
      </div>
    </div>
  );
}

