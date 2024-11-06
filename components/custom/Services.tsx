import React from 'react';

function Services() {
    const services = [
        {
            icon: 'fa-truck',
            title: '24/7 Roadside Assistance',
            description: 'We provide round-the-clock roadside assistance, including jump starts, tire changes, and fuel delivery.',
        },
        {
            icon: 'fa-car-crash',
            title: 'Accident Recovery',
            description: 'Our team is equipped to handle accidents of all sizes, from minor fender benders to major collisions.',
        },
        {
            icon: 'fa-car-battery',
            title: 'Battery Boosting',
            description: 'We can quickly boost your battery to get you back on the road.',
        },
        {
            icon: 'fa-wrench',
            title: 'Vehicle Transportation',
            description: 'We offer reliable vehicle transportation services to any destination.',
        },
    ];

    return (
        <section className="container px-4 sm:px-6 lg:px-8 mx-auto bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center">
                            <i className={`fa ${service.icon} text-4xl text-blue-500 mb-4`}></i>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;