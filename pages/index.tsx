import {Htag, Button, P, Rating} from "../components";
import {useState} from "react";
import {withLayout} from "../layout/Layout";


function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4);

  return (
    <>
        <Htag tag={"h1"}>Welcome</Htag>
        <Button appearance={"primary"} arrow="right">кнопка primary</Button>
        <Button appearance={"ghost"} arrow="down">кнопка ghost</Button>
        <P size="l">Большой</P>
        <P>Средний</P>
        <P size="s">Маленький</P>
        <Rating rating={rating} isEditable ={true} setRating={setRating}/>
    </>
  );
}


export default withLayout(Home);