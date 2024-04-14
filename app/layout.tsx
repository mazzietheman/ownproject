import { Inter } from "next/font/google"; 
import "./globals.css"; 
import Link from "next/link"; 
import * as React from "react"; 
import { cn } from "@/lib/utils"; 
import { Icons } from "@/components/icons"; 
import { 
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuLink, 
    NavigationMenuList, 
    NavigationMenuTrigger, 
    navigationMenuTriggerStyle, 
} from "@/components/ui/navigation-menu"; 
 
const components: { title: string; href: string; description: string }[] = [ 
    { 
        title: "Product", 
        href: "/product", 
        description: "This is products description", 
    }, 
    { 
        title: "Customer", 
        href: "/customer", 
        description: "And this is customers description", 
    }, 
]; 
 
const inter = Inter({ subsets: ["latin"] }); 
 
export default function RootLayout({ 
    children, 
}: Readonly<{ 
    children: React.ReactNode; 
}>) { 
    return ( 
        <html lang="en"> 
            <body className={inter.className}> 
                <NavigationMenu> 
                    <NavigationMenuList> 
                        <NavigationMenuItem> 
                            <Link href="/" legacyBehavior passHref> 
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} 
                                > 
                                    Home 
                                </NavigationMenuLink> 
                            </Link> 
                        </NavigationMenuItem> 
                        <NavigationMenuItem> 
                            <NavigationMenuTrigger> 
                                Getting started 
                            </NavigationMenuTrigger> 
                            <NavigationMenuContent> 
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid
cols-[.75fr_1fr]"> 
                                    <li className="row-span-3"> 
                                        <NavigationMenuLink asChild> 
                                            <Link 
                                                className="flex h-full w-full select-none flex-col 
justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none 
focus:shadow-md" 
                                                href="/" 
                                            > 
                                                <Icons.logo className="h-6 w-6" /> 
                                                <div className="mb-2 mt-4 text-lg font-medium"> 
                                                    shadcn/ui 
                                                </div> 
                                                <p className="text-sm leading-tight text-muted
foreground"> 
                                                    Beautifully designed 
                                                    components that you can copy 
                                                    and paste into your apps. 
                                                    Accessible. Customizable. 
                                                    Open Source. 
                                                </p> 
                                            </Link> 
                                        </NavigationMenuLink> 
                                    </li> 
                                    <ListItem href="/" title="Home"> 
                                        This is Home page 
                                    </ListItem> 
                                    <ListItem href="/product" title="Product"> 
                                        Another product description 
                                    </ListItem> 
                                    <ListItem href="/customer" title="Customer"> 
                                        Another customer description 
                                    </ListItem> 
                                </ul> 
                            </NavigationMenuContent> 
                        </NavigationMenuItem> 
                        <NavigationMenuItem> 
                            <NavigationMenuTrigger> 
                                Components 
                            </NavigationMenuTrigger> 
                            <NavigationMenuContent> 
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols
2 lg:w-[600px] "> 
                                    {components.map((component) => ( 
                                        <ListItem 
                                            key={component.title} 
                                            title={component.title} 
                                            href={component.href} 
                                        > 
                                            {component.description} 
                                        </ListItem> 
                                    ))} 
                                </ul> 
                            </NavigationMenuContent> 
                        </NavigationMenuItem> 
                        <NavigationMenuItem> 
                            <Link href="/product" legacyBehavior passHref> 
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} 
                                > 
                                    Product 
                                </NavigationMenuLink> 
                            </Link> 
                        </NavigationMenuItem> 
                        <NavigationMenuItem> 
                            <Link href="/customer" legacyBehavior passHref> 
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()} 
                                > 
                                    Customer 
                                </NavigationMenuLink> 
                            </Link> 
                        </NavigationMenuItem> 
                    </NavigationMenuList> 
                </NavigationMenu> 
 
                {children} 
            </body> 
        </html> 
    ); 
} 
const ListItem = React.forwardRef< 
    React.ElementRef<"a">, 
    React.ComponentPropsWithoutRef<"a"> 
>(({ className, title, children, ...props }, ref) => { 
    return ( 
        <li> 
            <NavigationMenuLink asChild> 
                <Link 
                    ref={ref} 
                    className={cn( 
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline 
outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent 
focus:text-accent-foreground", 
                        className 
                    )} 
                    {...props} 
                > 
                    <div className="text-sm font-medium leading-none"> 
                        {title} 
                    </div> 
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground"> 
                        {children} 
                    </p> 
                </Link> 
            </NavigationMenuLink> 
        </li> 
    ); 
});