import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            About BlueBerry
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Your trusted partner for fresh, organic groceries delivered right to your doorstep.
            We believe in quality, sustainability, and making healthy eating accessible to everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Our Story
            </h2>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              Founded in 2020, BlueBerry started with a simple mission: to make fresh, organic
              groceries accessible to everyone. What began as a small local delivery service has
              grown into a trusted platform serving thousands of families.
            </p>
            <p className="text-neutral-600 mb-4 leading-relaxed">
              We work directly with local farmers and trusted suppliers to bring you the freshest
              produce, dairy, and pantry essentials. Every product is carefully selected and
              quality-checked before it reaches your home.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Today, we're proud to be more than just a grocery delivery service—we're a community
              committed to healthy living, sustainable practices, and supporting local agriculture.
            </p>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop"
              alt="Fresh groceries"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Quality First</h3>
              <p className="text-neutral-600 leading-relaxed">
                We never compromise on quality. Every product is handpicked and thoroughly
                inspected to meet our high standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Sustainability</h3>
              <p className="text-neutral-600 leading-relaxed">
                We're committed to reducing our environmental footprint through eco-friendly
                packaging and sustainable sourcing practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Community</h3>
              <p className="text-neutral-600 leading-relaxed">
                We support local farmers and businesses, creating a positive impact in the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Passionate people working together to bring you the best grocery experience
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://i.pravatar.cc/300?img=1' },
            { name: 'Michael Chen', role: 'Head of Operations', image: 'https://i.pravatar.cc/300?img=12' },
            { name: 'Emily Rodriguez', role: 'Quality Manager', image: 'https://i.pravatar.cc/300?img=5' },
            { name: 'David Kim', role: 'Customer Success', image: 'https://i.pravatar.cc/300?img=14' },
          ].map((member, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
              />
              <h3 className="font-semibold text-lg text-neutral-900">{member.name}</h3>
              <p className="text-neutral-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary to-accent-blue text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Products</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Local Farmers</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
