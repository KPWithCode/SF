// userUtils.ts

import { supabaseClient } from "./supabase";

export async function createUserInDatabase(userId: string, email: string | undefined, display_name: string) {
  try {
    const { data, error } = await supabaseClient
      .from("users")
      .upsert(
        [
          {
            user_id: userId,
            email: email, 
            display_name: display_name || null, 
          },
        ], { onConflict: 'user_id' });

    if (error) {
      throw new Error(`Error creating user in the database: ${error.message}`);
    } else {
      console.log('User created in the database successfully!');
    }
  } catch (error) {
    console.error(error);
  }
}

export const userExistsInDatabase = async (userId: string) => {
    try {
      const { data, error } = await supabaseClient
        .from('users')
        .select('user_id')
        .eq('user_id', userId);
  
      if (error) {
        throw new Error(`Error checking user existence in the database: ${error.message}`);
      }
  
      return data && data.length > 0; // Returns true if the user exists
    } catch (error) {
      console.error(error);
      return false; // Error checking user existence
    }
  };
