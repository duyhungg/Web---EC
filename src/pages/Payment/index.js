import { useEffect } from 'react';

function Payment() {
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return <div className="container"></div>;
}

export default Payment;
