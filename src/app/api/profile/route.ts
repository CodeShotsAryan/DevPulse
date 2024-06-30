
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import Profile from '../../../../prisma/models/Profile';


const getQueryParams = (url: string) => {
    const params = new URL(url).searchParams;
    return Object.fromEntries(params.entries());
  };


export async function POST(req: NextRequest) {
    try {
        const { userId, profilePicture, firstName, lastName, age, bio } = await req.json();

        const profile = new Profile({
            userId,
            profilePicture,
            firstName,
            lastName,
            age,
            bio,
        });

        await profile.save();

        return NextResponse.json({
            success: true,
            data: profile,
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating profile:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to create profile. Please try again later.',
        }, { status: 500 });
    }
}
export async function GET(req: NextRequest) {
    await connectDB();
    
    try {
        const { profileId } = getQueryParams(req.url);

        if (profileId) {
            const profile = await Profile.findById(profileId);

            if (!profile) {
                return NextResponse.json({
                    success: false,
                    message: 'Profile not found.',
                }, { status: 404 });
            }

            return NextResponse.json({
                success: true,
                data: profile,
            }, { status: 200 });
        } else {
            const profiles = await Profile.find();

            return NextResponse.json({
                success: true,
                data: profiles,
            }, { status: 200 });
        }
    } catch (error) {
        console.error('Error fetching profiles:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch profiles. Please try again later.',
        }, { status: 500 });
    }
}
async function PUT(req: NextRequest) {
    try {
        const { profileId } = getQueryParams(req.url);
        const { profilePicture, firstName, lastName, age, bio } = await req.json();

        if (!profileId) {
            return NextResponse.json({
                success: false,
                message: 'Profile ID is required.',
            }, { status: 400 });
        }

        const profile = await Profile.findById(profileId);

        if (!profile) {
            return NextResponse.json({
                success: false,
                message: 'Profile not found.',
            }, { status: 404 });
        }

        // Update the profile fields if provided
        if (profilePicture) profile.profilePicture = profilePicture;
        if (firstName) profile.firstName = firstName;
        if (lastName) profile.lastName = lastName;
        if (age) profile.age = age;
        if (bio) profile.bio = bio;

        await profile.save();

        return NextResponse.json({
            success: true,
            data: profile,
        }, { status: 200 });

    } catch (error) {
        console.error('Error updating profile:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to update profile. Please try again later.',
        }, { status: 500 });
    }
}

