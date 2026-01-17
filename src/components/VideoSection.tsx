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
          <div className="aspect-video rounded-xl border border-border overflow-hidden bg-background">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WM1XLiKt-IA?si=ghPaMsp__YBPnxrZ&start=4"
              title="Nurturious Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
