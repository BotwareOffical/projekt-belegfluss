const VideoSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <div className="text-center mb-8">
          <p className="body-sm mb-2">So sieht das im Alltag aus</p>
          <p className="body-md">
            Kein Verkauf. Ein echtes Beispiel aus dem Betriebsalltag.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="aspect-video bg-secondary rounded-xl border border-border flex items-center justify-center">
            <p className="body-sm">Video wird geladen...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
