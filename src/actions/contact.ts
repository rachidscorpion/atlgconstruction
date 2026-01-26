"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function sendEmail(prevState: any, formData: FormData): Promise<{ success?: string; error?: string }> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Please fill in all fields." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "ATL Great Construction <onboarding@resend.dev>", // Default for testing, change if domain verified
            to: "atlgreatconstructionandrenovat@gmail.com",
            subject: `New Contact Form Query from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            replyTo: email,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: "Failed to send email. Please try again." };
        }

        return { success: "Message sent! We'll get back to you soon." };
    } catch (error) {
        console.error("Server Error:", error);
        return { error: "Something went wrong." };
    }
}
