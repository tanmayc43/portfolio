import Button from './Button';
export default function ContactCard() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button size="lg" onClick={() => window.location.href = '/'}>
                            Get Started
                        </Button>

                        <Button size="lg" variant="outline" onClick={() => window.location.href = '/'}>
                            Book Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}