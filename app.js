        const url = "http://localhost:3000/data"
        export default function App(){
/*
            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data))
            .catch(error => console.error(error));
*/
            const [data, setData] = React.useState([]);
            React.useEffect(() => {
            fetch("http://localhost:3000/data")
                .then(response => response.json())
                .then(setData)
                .catch(console.error);
            }, []);

            const handleClick = (title) => {
                console.log(title)
            }
            const type = 'Checkbox';
            const Checkbox = Form[type];

            const Button = () => {
                return <button 
                            href="https://www.facebook.com/"
                            onClick={() => console.log('Hehe')}
                            >Hehe
                        </button>
            }

            return (
                <div id="wrapper">
                    <Button/>
                    <Checkbox/>
                    {data.map(({id,image_url, title, description}) => (
                        <PostItem
                            key={id}
                            imageUrl={image_url}
                            description={description}
                            title={title}
                            onClick = {() => handleClick(title)}
                        />
                    ))}
                </div>
            );
        }