import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This page is coming soon. We're working on creating an amazing contact experience for you.
          </p>
          <div className="inline-block px-6 py-3 bg-secondary rounded-lg">
            <span className="text-sm text-muted-foreground">Page under construction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;