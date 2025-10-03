import beforeAfterImage from "@assets/generated_images/Before_after_window_cleaning_908248b2.png";

export default function BeforeAfter() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See the Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our drone cleaning technology delivers exceptional results
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={beforeAfterImage} 
              alt="Before and after comparison of window cleaning"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex justify-between items-center text-white">
                <div>
                  <p className="text-sm font-medium opacity-90">Before</p>
                  <p className="text-lg font-semibold">Dirty & Streaky</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium opacity-90">After</p>
                  <p className="text-lg font-semibold">Crystal Clear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
