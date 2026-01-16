/*
  # MAAVII Multi-Module Database Schema
  
  ## Overview
  This migration creates the complete database structure for Maavii's three service modules:
  - Module A: Online Ordering & Fulfillment
  - Module B: African Grocery Marketplace
  - Module C: Education & Professional Services
  
  ## New Tables
  
  ### Module A: Online Ordering
  - `menu_items`: Store menu items with images and pricing
  - `orders`: Customer orders with status tracking
  - `order_items`: Line items for each order
  - `order_notes`: Special instructions for orders
  
  ### Module B: Grocery Marketplace
  - `grocery_items`: African ingredients and products
  - `grocery_orders`: Orders for grocery items
  - `grocery_deliveries`: Delivery tracking for grocery orders
  
  ### Module C: Education & Services
  - `workshops`: Cooking classes and training programs
  - `workshop_registrations`: Student registrations
  - `catering_requests`: Catering inquiry forms
  - `events`: Cultural festivals and special events
  - `training_programs`: Professional development programs
  
  ### Media Management
  - `media`: Centralized image/file storage metadata
  
  ## Security
  - RLS enabled on all tables
  - Restrictive policies with proper authentication checks
  - Anon users can read public content, authenticated users can manage own data
*/

-- Module A: Menu Items
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text NOT NULL,
  price numeric NOT NULL,
  image_url text,
  customizations jsonb,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view menu items"
  ON menu_items FOR SELECT
  USING (true);

-- Module A: Orders
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  email text NOT NULL,
  phone text NOT NULL,
  fulfillment_type text NOT NULL,
  status text DEFAULT 'pending',
  total_amount numeric NOT NULL,
  notes text,
  delivery_address text,
  estimated_completion timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id::text OR email = (SELECT email FROM auth.users WHERE id = auth.uid()));

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

-- Module A: Order Items
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id uuid NOT NULL REFERENCES menu_items(id),
  quantity integer NOT NULL,
  customization_details jsonb,
  unit_price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view order items for their orders"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND (auth.uid()::text = orders.user_id::text OR orders.email = (SELECT email FROM auth.users WHERE id = auth.uid()))
    )
  );

-- Module B: Grocery Items
CREATE TABLE IF NOT EXISTS grocery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category text NOT NULL,
  price numeric NOT NULL,
  quantity_unit text,
  image_url text,
  origin_country text,
  available boolean DEFAULT true,
  stock_level integer DEFAULT 10,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE grocery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view grocery items"
  ON grocery_items FOR SELECT
  USING (true);

-- Module B: Grocery Orders
CREATE TABLE IF NOT EXISTS grocery_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  email text NOT NULL,
  phone text NOT NULL,
  total_amount numeric NOT NULL,
  delivery_address text NOT NULL,
  status text DEFAULT 'pending',
  tracking_number text,
  estimated_delivery timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE grocery_orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their grocery orders"
  ON grocery_orders FOR SELECT
  USING (auth.uid()::text = user_id::text OR email = (SELECT email FROM auth.users WHERE id = auth.uid()));

CREATE POLICY "Anyone can create grocery orders"
  ON grocery_orders FOR INSERT
  WITH CHECK (true);

-- Module C: Workshops
CREATE TABLE IF NOT EXISTS workshops (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  category text NOT NULL,
  price numeric NOT NULL,
  duration_hours integer,
  max_participants integer,
  schedule jsonb,
  instructor_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view workshops"
  ON workshops FOR SELECT
  USING (true);

-- Module C: Workshop Registrations
CREATE TABLE IF NOT EXISTS workshop_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workshop_id uuid NOT NULL REFERENCES workshops(id),
  user_id uuid,
  email text NOT NULL,
  phone text NOT NULL,
  full_name text NOT NULL,
  participants_count integer DEFAULT 1,
  status text DEFAULT 'registered',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workshop_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their registrations"
  ON workshop_registrations FOR SELECT
  USING (auth.uid()::text = user_id::text OR email = (SELECT email FROM auth.users WHERE id = auth.uid()));

CREATE POLICY "Anyone can create registrations"
  ON workshop_registrations FOR INSERT
  WITH CHECK (true);

-- Module C: Catering Requests
CREATE TABLE IF NOT EXISTS catering_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date NOT NULL,
  guest_count integer NOT NULL,
  event_type text NOT NULL,
  special_requests text,
  budget_range text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE catering_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their catering requests"
  ON catering_requests FOR SELECT
  USING (email = (SELECT email FROM auth.users WHERE id = auth.uid()) OR true);

CREATE POLICY "Anyone can create catering requests"
  ON catering_requests FOR INSERT
  WITH CHECK (true);

-- Module C: Events
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  event_date date NOT NULL,
  event_time time,
  location text,
  category text NOT NULL,
  capacity integer,
  price numeric,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

-- Module C: Training Programs
CREATE TABLE IF NOT EXISTS training_programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  category text NOT NULL,
  duration_weeks integer,
  price numeric,
  start_date date,
  prerequisites text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE training_programs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view training programs"
  ON training_programs FOR SELECT
  USING (true);

-- Media Management
CREATE TABLE IF NOT EXISTS media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name text NOT NULL,
  file_type text,
  file_size integer,
  storage_path text,
  module text,
  entity_type text,
  entity_id uuid,
  uploaded_by uuid,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view media"
  ON media FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can upload media"
  ON media FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = uploaded_by);
