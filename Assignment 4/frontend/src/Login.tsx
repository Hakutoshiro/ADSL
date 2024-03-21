import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import LoginStudents from "./Student/LoginStudent";
import LoginTeacher from "./Teacher/LoginTeacher";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 p-2 px-10 py-20">
      <Card className="flex-grow max-w-5xl mx-52">
        <CardHeader>Teachers</CardHeader>
        <Divider />
        <CardBody>
          <LoginTeacher />
        </CardBody>
      </Card>
      <Card className="max-w-5xl mx-52">
        <CardHeader>Students</CardHeader>
        <Divider />
        <CardBody>
          <LoginStudents />
        </CardBody>
      </Card>
    </div>
  );
};
export default Login;