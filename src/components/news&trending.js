import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import { CardDeck } from "reactstrap";
import {FiTrendingUp} from 'react-icons/fi'

export default function BasicCardExample() {
  return (
      <div>
         <center> <h2><FiTrendingUp/>Trending</h2>  </center>
          <CardDeck>
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Card header</CardHeader>
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>Lorem Ipsum</CardTitle>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button>Read more &rarr;</Button>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
    </CardDeck>
    </div>
  );
}
