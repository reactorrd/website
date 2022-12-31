import React from 'react'
import Button from './Button'
import { features } from '../constants'
import FeatureCard from './FeatureCard'
import styles, { layout } from '../style'

function Business() {
    return (
        <section id='features' 
            className={layout.section}
        >
            <div 
                className={layout.sectionInfo}
            >
                <h2 
                    className={styles.heading2}
                >You do the business, <br 
                    className='sm:block hidden' 
                /> we’ll handle the marketing.</h2>
                <p 
                    className={`${styles.paragraph} max-w-[470px] mt-5`}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla tempora perspiciatis quia unde id velit alias? 
                    Quis perspiciatis et nemo deleniti delectus ab eius possimus,
                    accusamus voluptate, quae natus. Deserunt.
                </p>
                <Button styles='mt-10'/>
            </div>

            <div 
                className={`${layout.sectionImg} flex-col`}
            >
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
            </div>
        </section>
    )
}

export default Business