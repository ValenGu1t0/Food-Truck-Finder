

export default function About() {

    return (

        <section className="flex flex-col justify-center items-center w-full p-4">
          
            <div className="flex flex-col justify-center items-center text-black p-8 gap-8 w-[90%] bg-purple-300 rounded-xl sm:max-w-2/4 lg:max-w-2/4 ">
                <h2 className="text-2xl font-semibold font-mono text-purple-950">About Us</h2>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-mono text-purple-950">Why lorem it when you have ChatGPT?</h3>
                    <p className="text-justify font-sans">At Food-Finder, we make it easy to discover the best food trucks in San Francisco. Whether you're craving tacos, burgers, or sweet treats, our app helps you find top-rated food trucks near you in real time.</p>
                </div>

                <div>
                    <h3 className="font-semibold font-mono text-purple-950">How We Do It</h3>
                    <p className="text-justify font-sans">We use real-time location tracking and curated listings to bring you the latest food truck updates. Our app allows you to browse by cuisine, see live locations, and check schedules so you never miss out on your favorite dishes.</p>
                </div>

                <div>
                    <h3 className="font-semibold font-mono text-purple-950">Why San Francisco?</h3>
                    <p className="text-justify font-sans">San Francisco is a city full of culture, diversity, and incredible food. From the iconic waterfront to bustling neighborhoods, food trucks bring the city’s vibrant culinary scene to life. We believe street food is an essential part of SF’s identity, and our</p>
                </div>

            </div>
            
        </section>
    )
}