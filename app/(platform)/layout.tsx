import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider afterSignOutUrl="/sign-in">{children}</ClerkProvider>;
};

export default PlatformLayout;
