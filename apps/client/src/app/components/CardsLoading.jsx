import React from 'react'

const CardsLoading = () => {

    const cardsLoading = Array.from({ length: 10 }, (_, index) => index + 1);

    return cardsLoading.map(
        (item)=>(
            <div key={item} className="card placeholder-glow" aria-hidden="true">
                <span className="placeholder h-100 d-flex p-2 justify-content-between align-items-end">
                    <div className="rounded-circle bg-secondary" style={{width: '50px', height:'50px'}}></div>
                    <div className="bg-secondary" style={{width: '50px', height:'20px'}}></div>
                </span>
            </div>
        )
    )
}

export default CardsLoading