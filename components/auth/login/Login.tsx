'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import {
  currentUser,
  loginUser,
} from '@/services/AuthServices';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from './LoginValidationSchema';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
  Loader2,
  ArrowRight,
  Sofa,
} from 'lucide-react';

import { useUser } from '@/context/UserContext';

const LoginForm = () => {
  const { setUser, setLoading } = useUser();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(
      loginValidationSchema
    ),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> =
    async (data) => {
      try {
        const res = await loginUser(data);

        if (res) {
          toast.success(
            'Login successful!'
          );

          const user =
            await currentUser();

          setUser(user);
          setLoading(false);

          router.refresh();
          router.push('/');
        }
      } catch (error) {
        console.log(error);
        toast.error(
          'Invalid email or password'
        );
      }
    };

  return (
    <section
      className="
        relative min-h-screen
        overflow-hidden
        bg-background
        flex items-center
        justify-center
        px-4 py-10
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-0 left-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />
      </div>

      <Card
        className="
          overflow-hidden
          border border-white/10
          bg-background/70
          backdrop-blur-2xl
          shadow-2xl
          rounded-[36px]
          w-full
          max-w-6xl
          grid lg:grid-cols-2
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            hidden lg:flex
            flex-col justify-center
            p-14
            bg-[#029fae]
            text-white
            relative
            overflow-hidden
          "
        >
          <div className="relative z-10">
            <div
              className="
                flex h-16 w-16
                items-center justify-center
                rounded-2xl
                bg-white/20
                mb-8
              "
            >
              <Sofa className="h-8 w-8" />
            </div>

            <h2 className="text-5xl font-bold leading-tight">
              Welcome Back to Comforty
            </h2>

            <p className="mt-6 text-white/80 leading-8 text-lg">
              Login to discover premium
              furniture crafted for modern
              living and timeless interiors.
            </p>
          </div>

          {/* Decorative Glow */}
          <div
            className="
              absolute -bottom-20 -right-20
              h-[250px] w-[250px]
              rounded-full
              bg-white/10
            "
          />
        </div>

        {/* RIGHT SIDE */}
        <CardContent className="p-8 sm:p-10 lg:p-14">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border border-[#029fae]/20
                  bg-[#029fae]/10
                  px-4 py-2
                  text-sm text-[#029fae]
                "
              >
                Login Account
              </span>

              <h1
                className="
                  mt-5
                  text-3xl
                  sm:text-4xl
                  font-bold
                  text-foreground
                "
              >
                Sign In
              </h1>

              <p className="mt-3 text-muted-foreground">
                Enter your credentials to
                continue shopping.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(
                  onSubmit
                )}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email Address
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          value={
                            field.value || ''
                          }
                          className="
                            h-12
                            border-white/10
                            bg-white/[0.03]
                          "
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Password
                      </FormLabel>

                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                          value={
                            field.value || ''
                          }
                          className="
                            h-12
                            border-white/10
                            bg-white/[0.03]
                          "
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    h-12
                    rounded-xl
                    bg-[#029fae]
                    hover:bg-[#028896]
                    shadow-lg
                    shadow-[#029fae]/30
                  "
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Login
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            {/* Footer */}
            <div className="mt-8 space-y-4 text-center">
              <p className="text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link
                  href="/register"
                  className="
                    text-[#029fae]
                    hover:underline
                    font-medium
                  "
                >
                  Register
                </Link>
              </p>

              <Link href="/">
                <Button
                  variant="outline"
                  className="
                    w-full
                    h-12
                    border-white/10
                  "
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginForm;