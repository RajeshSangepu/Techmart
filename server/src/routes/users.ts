import { Router } from 'express';
import { supabase } from '../lib/supabase.js';

const router = Router();

router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user' });
  }
});

export const userRoutes = router;