// // src/middlewares/authMiddleware.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { verifyToken } from '@/utils/jwtUtils';

// export async function verifyTokenMiddleware(req: NextRequest, next: () => NextResponse) {
//   const token = req.headers.get('authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return NextResponse.json({
//       success: false,
//       message: 'Authorization token not found',
//     }, { status: 401 });
//   }

//   try {
//     const decoded = verifyToken(token);
//     req.user = decoded.user; // Attach user info to request object
//     return next();
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: 'Invalid token',
//     }, { status: 401 });
//   }
// }
