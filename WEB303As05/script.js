/*
    Name : Gurjeet Singh
    Student Id : 0792908
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem{
        constructor(id, name, description, category){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category){
            if (this.id !== id && !name && !description && !category){
                return;
            } else {
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString(){
            const h4El = $('<h4></h4').text(this.name);
            const pEl = $('<p></p>').text(this.description);
            const divEl = $('<div></div>').text(this.category);

            const wrapperDiv = $('<div></div>');
            wrapperDiv.addClass('content-item-wrapper');
            wrapperDiv.attr('id', `content-item-${this.id}`);
            wrapperDiv.append(h4El, pEl, divEl);  
            
            return wrapperDiv;
        }

    }

    const car1 = new ContentItem(1, 'Pontiac GTO', 'The Pontiac GTO is widely acknowledged as the car that really kicked off the 1960s Muscle Car era. It was initially offered as an optional package on the mid-size Pontiac Tempest and was the first truly mass-market high performance model to follow the big displacement engine route, using a tuned 389 cubic inch (6.4-litre) V8 engine in place of the entry-level Tempest’s 140bhp six.', 'Muscle Car');

    const car2 = new ContentItem(2, 'Chevrolet Camaro', 'The Chevrolet Camaro was produced in answer to the runaway success of the Ford Mustang, which had been launched in 1964. Arriving three years later, the Camaro was a sporty coupe and convertible based on the Chevy Nova platform, but with some meaty engine options including a 396 cubic inch V8 making up to 375bhp. There were racy RS and SS option packs that included a blacked–out grille with concealed headlamps, simulated air intakes and ‘bumble bee’ striping, but performance purists could opt for the Z/28 package which added serious chassis mods designed for racing versions.', 'Sports');
    
    const car3 = new ContentItem(3, 'Shelby Mustang GT-350', 'A 289 cubic inch (4.7-litre) V8 was soon introduced with up to 271bhp, but it’s the Shelby GT-350 versions of those early cars that really get collectors fired-up. Painted in trademark Wimbledon White with blue stripes along the sill panels, the cars were uprated by legendary Le Mans 24hrs winning driver, and AC Cobra originator Carroll Shelby. As well as a power hike to 306bhp, the Mustang GT-350 featured a side-exiting exhaust system, uprated brakes and suspension, and had a spare wheel mounted where the rear seat should go, making it eligible for sports car racing.', 'Vintage');

    const car4 = new ContentItem(4, 'Chevrolet Corvette L88', 'The Mako shark-inspired Corvette C3 Stingray arrived in 1968 at the peak of the muscle car era, and included an L88 big block engine option designed primarily for racing. The 427 cubic inch (7.0-litre) V8 had an advertised horsepower of 430bhp, but many believe production models actually escaped from the factory with upwards of 550bhp. Other L88 upgrades included a heavy-duty four speed manual gearbox, uprated brakes and suspension, and deletion of the air con, heater and radio options.', 'Sports');

    const car5 = new ContentItem(5, 'Dodge Challenger Hellcat', 'If we thought the Chevrolet Camaro ZL1 was over the top with 580bhp, or the Ford Mustang GT500 was outrageous with 650bhp, then the 707bhp pumped out by the 6.2-litre Hemi V8-engined Dodge Challenger Hellcat is simply shocking. That means it’s packing more power than many supercars, and with the optional paddle-shifted eight-speed auto gearbox, the Hellcat races to 60mph in just 3.6 seconds.', 'Muscle Car');

    const cars = [car1, car2, car3, car4, car5];

    for(let i = 0; i < cars.length; i++){
        $('div#content-item-list').append(cars[i].toString());
    }


    $('.content-item-wrapper').css(
        {
        'border' : '1.4px solid Green',
        'width' : '85%',
        'padding' : '4.5px 10.5px',
        'margin' : '7px auto'
    }
    );
});
