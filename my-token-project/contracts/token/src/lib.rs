#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, String, symbol_short};

// Storage keys
const BALANCE: soroban_sdk::Symbol = symbol_short!("BALANCE");
const NAME: soroban_sdk::Symbol = symbol_short!("NAME");
const SYMBOL: soroban_sdk::Symbol = symbol_short!("SYMBOL");
const TOTAL: soroban_sdk::Symbol = symbol_short!("TOTAL");

// Contract struct
#[contract]
pub struct TokenContract;

// Token data structure
#[contracttype]
#[derive(Clone)]
pub struct TokenInfo {
    pub name: String,
    pub symbol: String,
    pub total_supply: i128,
}

#[contractimpl]
impl TokenContract {

    // Initialize token dengan nama, symbol, dan supply
    pub fn initialize(
        env: Env,
        admin: Address,
        name: String,
        symbol: String,
        total_supply: i128,
    ) {
        // Verify admin authorization
        admin.require_auth();

        // Validasi input
        if total_supply <= 0 {
            panic!("Total supply harus lebih dari 0");
        }

        // Simpan token info
        env.storage().instance().set(&NAME, &name);
        env.storage().instance().set(&SYMBOL, &symbol);
        env.storage().instance().set(&TOTAL, &total_supply);

        // Set balance admin = total supply
        env.storage().instance().set(&BALANCE, &total_supply);
    }

    // Get nama token
    pub fn get_name(env: Env) -> String {
        env.storage().instance().get(&NAME).unwrap()
    }

    // Get symbol token
    pub fn get_symbol(env: Env) -> String {
        env.storage().instance().get(&SYMBOL).unwrap()
    }

    // Get total supply
    pub fn get_total_supply(env: Env) -> i128 {
        env.storage().instance().get(&TOTAL).unwrap()
    }

    // Get balance
    pub fn get_balance(env: Env) -> i128 {
        env.storage().instance().get(&BALANCE).unwrap_or(0)
    }

    // Transfer token (simplified - real token contract lebih kompleks)
    pub fn transfer(env: Env, from: Address, _to: Address, amount: i128) {
        // Verify authorization
        from.require_auth();

        // Validasi amount
        if amount <= 0 {
            panic!("Amount harus lebih dari 0");
        }

        // Get current balances (simplified)
        let balance: i128 = env.storage().instance().get(&BALANCE).unwrap_or(0);

        // Check sufficient balance
        if balance < amount {
            panic!("Balance tidak cukup");
        }

        // Update balance (simplified version)
        let new_balance = balance - amount;
        env.storage().instance().set(&BALANCE, &new_balance);
    }
}

mod test;