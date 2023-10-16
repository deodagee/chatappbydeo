import { z } from 'zod';

export const addFriendValidator = z.object({
  email: z.string().email(),
});

let inputData;
try {
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("add-friends.ts Error1:Validation error details:", error.errors);
  } else {
    console.error("add-friends.ts:Error2:", error);
  }
}

console.log("add-friends.ts:Received data:", inputData);
