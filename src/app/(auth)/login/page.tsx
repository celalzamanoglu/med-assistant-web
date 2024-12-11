"use client";

import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Divider,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import {
  ThemeSwitch,
  EmailIcon,
  LockIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@components";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [errors, setErrors] = React.useState<{
    email?: string;
    password?: string;
  }>({});

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Basic validation
    const newErrors: typeof errors = {};

    if (!data.email) {
      newErrors.email = "E-posta adresi gerekli";
    }

    if (!data.password) {
      newErrors.password = "Şifre gerekli";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and submit
    setErrors({});
    // Here you would typically make an API call to authenticate
    console.log("Giriş yapılıyor:", {
      email: data.email,
      password: data.password,
    });

    // Mock authentication
    localStorage.setItem("isAuthenticated", "true");
    router.push("/"); // Redirect to home page
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="max-w-md w-full">
        <CardHeader className="flex flex-col gap-2">
          <div className="self-end">
            <ThemeSwitch />
          </div>
          <h1 className="text-2xl font-bold text-center">Hoş Geldiniz!</h1>
          <p className="text-default-500 text-center">
            Hesabınıza erişmek için giriş yapın
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <Input
              isRequired={false}
              label="E-posta"
              labelPlacement="outside"
              name="email"
              placeholder="E-posta adresinizi girin"
              type="email"
              value={email}
              errorMessage={errors.email}
              onValueChange={setEmail}
              startContent={<EmailIcon />}
            />

            <Input
              isRequired={false}
              label="Şifre"
              labelPlacement="outside"
              name="password"
              placeholder="Şifrenizi girin"
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              errorMessage={errors.password}
              onValueChange={setPassword}
              startContent={<LockIcon />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              }
            />

            <Button type="submit" color="primary" size="lg" className="w-full">
              Giriş Yap
            </Button>
          </Form>
        </CardBody>
        <Divider />
        <CardFooter className="flex flex-col gap-2">
          <p className="text-center text-small">
            Hesabınız yok mu?{" "}
            <Link href="/signup" size="sm">
              Kayıt Ol
            </Link>
          </p>
          <Link href="/forgot-password" size="sm" className="text-center">
            Şifremi Unuttum
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
