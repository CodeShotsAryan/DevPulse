// import { NextResponse, NextRequest } from 'next/server';
// import { verifyTokenMiddleware } from '@/middlewares/authMiddleware';

// export async function GET(req: NextRequest) {
//   return await verifyTokenMiddleware(req, () => {
//     // If token is valid, proceed with the route logic
//     const user = req.user;
//     return NextResponse.json({
//       success: true,
//       message: `Welcome ${user?.username}`,
//     }, { status: 200 });
//   });
// }