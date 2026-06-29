export default function AdoptionProcess() {
  const steps = [
    {
      number: "01",
      title: "Browse pets",
      text: "Search by pet name, species, location, or adoption fee.",
    },
    {
      number: "02",
      title: "Submit request",
      text: "Choose a pickup date and send a thoughtful adoption message.",
    },
    {
      number: "03",
      title: "Owner reviews",
      text: "The owner or shelter approves or rejects the adoption request.",
    },
    {
      number: "04",
      title: "Bring pet home",
      text: "After approval, complete pickup and welcome your new companion.",
    },
  ];

  return (
    <section className="adoption-process-section section-padding">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl">
          <p className="process-badge mb-3 inline-block rounded-full px-5 py-2 text-sm font-bold">
            Adoption Process
          </p>

          <h2 className="process-title text-3xl font-black md:text-5xl">
            Simple, safe, and transparent
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="process-card rounded-3xl p-6">
              <p className="process-number text-4xl font-black">
                {step.number}
              </p>

              <h3 className="process-card-title mt-5 text-xl font-black">
                {step.title}
              </h3>

              <p className="process-card-text mt-3 leading-7">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}