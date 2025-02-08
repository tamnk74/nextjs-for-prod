import Container from "../components/Container";

export default function About() {
  return (
    <Container>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to creating innovative solutions that make a difference in people&apos;s lives.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2024, we started as a small team passionate about technology and its potential
              to transform businesses. Today, we&apos;ve grown into a diverse group of professionals committed
              to delivering excellence.
            </p>
            <p>
              Our journey has been marked by continuous learning and adaptation. We believe in staying
              ahead of the curve while maintaining our core values of integrity and innovation.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square w-full bg-gray-100 rounded-lg mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Team Member {item}</h3>
                <p className="text-gray-600 text-sm mb-2">Position/Role</p>
                <p className="text-gray-500 text-sm">
                  Brief description of team member&apos;s expertise and contributions.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Innovation', 'Integrity', 'Excellence'].map((value) => (
              <div key={value} className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center text-white">
                  <span className="text-xl">🌟</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{value}</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}