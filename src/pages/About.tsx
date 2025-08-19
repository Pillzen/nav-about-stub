import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      title: "Excellence",
      description: "Quality is at the heart of everything we do, from our products to our customer service."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients."
    },
    {
      title: "Integrity",
      description: "Transparency and honesty guide our actions and build trust with our stakeholders."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">About Us</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Building the 
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Future</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are a passionate team of innovators dedicated to creating exceptional digital experiences 
                  that transform businesses and delight users around the world.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary text-primary-foreground">Innovative</Badge>
                <Badge className="bg-accent text-accent-foreground">Creative</Badge>
                <Badge variant="outline">Reliable</Badge>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img 
                src={aboutHero} 
                alt="Our team collaborating" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>
            
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <blockquote className="text-lg italic text-center">
                  "We don't just build products; we craft experiences that inspire, 
                  engage, and transform the way people interact with technology."
                </blockquote>
                <cite className="block mt-4 text-sm text-muted-foreground">— Our Founding Team</cite>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our work and define our culture
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {value.title[0]}
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Work Together?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life with our expertise and passion.
              </p>
              <button className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors duration-200">
                Get in Touch
              </button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;