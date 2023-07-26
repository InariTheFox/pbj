/* Add your file imports here... */
import twitterLogo from "./images/twitter-logo.png";
import fullColourOne from "./images/full_colour/JaiyLockheed.jpg";
import fullColourTwo from "./images/full_colour/Bubble.jpg";
import fullColourThree from "./images/full_colour/Ellie.jpg";
import fullColourFour from "./images/full_colour/JayNoPins.jpg";
import fullColourFive from "./images/full_colour/NachieSFW.jpg";
import fullColourSix from "./images/full_colour/Aureo.jpg";
import fullColourSeven from "./images/full_colour/Sige.jpg";
import procreateOne from "./images/procreate/sampleOne.jpg";
import procreateTwo from "./images/procreate/sampleTwo.jpg";
import procreateThree from "./images/procreate/sampleThree.jpg";
import procreateFour from "./images/procreate/sampleFour.jpg";
import iconOne from "./images/icons/Cherry.jpg";
import iconTwo from "./images/icons/Honeyfolf.jpg";
import iconThree from "./images/icons/Ryallin.jpg";
import iconFour from "./images/icons/Tex.jpg";
import iconFive from "./images/icons/Thunder.jpg";

/* Do not touch these definitions. They are shared with other files. Do not move where they are defined. */
/* ==== START OF SENSITIVE AREA ==== */

export interface ILink {
    title: string;
    iconUrl?: string;
    url: string;
};

export interface ICommissionType {
    title: string;
    price: string;
    images: string[];
    description: string;
}

/* ===== END OF SENSITIVE AREA ===== */

/* ==== START OF CONFIGURATION AREA ==== */

/* Configure where your "Commission Me" button goes... */
export const CommissionMeUrl = "https://t.me/pbjart";

/* 
    Configure your page links here ...
    If you want to add or remove a link to a page.
*/
export const Pages: ILink[] = [
    {
        title: "Links",
        url: "/"
    },
    {
        title: "Commissions",
        url: "/commissions"
    },
    {
        title: "About",
        url: "/about"
    }
];

/*
    Configure your external links here...
    These will show up on your Home page and open a new
    window to the clicked link.
*/
export const ExternalLinks: ILink[] = [
    {
        title: "Mastodon",
        iconUrl: "https://blimps.xyz/favicon.ico",
        url: "https://blimps.xyz/@pbj"
    },
    {
        title: "Telegram",
        iconUrl: "https://telegram.org/favicon.ico",
        url: "https://t.me/pbjart"
    },
    {
        title: "Itaku",
        url: "https://itaku.ee/profile/pbj"
    },
    {
        title: "Ko-Fi",
        iconUrl: "https://ko-fi.com/favicon.ico",
        url: "https://ko-fi.com/pinkboyjay"
    },
    {
        title: "Twitter",
        iconUrl: twitterLogo,
        url: "https://twitter.com/pbjtf"
    },
    {
        title: "FurAffinity",
        iconUrl: "https://www.furaffinity.net/favicon.ico",
        url: "https://furaffinity.net/user/zorua"
    }
];

/*
    Configure your commission types here...
    This will let you set your commission types, prices,
    descriptions and images. Image must be declared as 
    `import imageName from "./images/folder/filename.jpg";`
    just like above.

    WARNING!
    Be very careful with the HTML used in the descriptions,
    as it uses an unsafe method to render the text. You could
    accidentally allow a cross-site scripting attack, so try
    not to do anything but simple formatting (lists, bold, etc.).
    YOU HAVE BEEN WARNED.
*/
export const CommissionTypes: ICommissionType[] = [
    {
        title: "Full colour illustrations",
        price: "£95",
        images: [fullColourOne, fullColourTwo, fullColourThree, fullColourFour, fullColourFive, fullColourSix, fullColourSeven],
        description: `<ul style="margin-left: 32px; list-style: disc"><li>2500x2500px+</li>
        <li>Detailed line art and fully rendered colours</li>
        <li>Includes simple colour background and props</li>
        <li>Additional characters are +50 to 100% depending on composition</li>
        <li>Complex characters and scenes may have an additional fee</li></ul>`
    },
    {
        title: "Procreate colour illustrations",
        price: "£60",
        images: [procreateOne, procreateTwo, procreateThree, procreateFour],
        description: `<ul style="margin-left: 32px; list-style: disc"><li>2000x2000px+</li>
        <li>Sketchier lines and simple colours</li>
        <li>Includes simple colour background and props</li>
        <li>Additional characters are +50 to 100% depending on composition</li>
        <li>Complex characters and scenes may have an additional fee</li></ul>`
    },
    {
        title: "Icons",
        price: "£50",
        images: [iconOne, iconTwo, iconThree, iconFour, iconFive],
        description: `<ul style="margin-left: 32px; list-style: disc"><li>2000x2000px+</li>
        <li>Fully lined and coloured</li>
        <li>Shoulders-up view</li>
        <li>Couples icons available</li></ul>`
    }
];

/* ===== END OF CONFIGURATION AREA ===== */
