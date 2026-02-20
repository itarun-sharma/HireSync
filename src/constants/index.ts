import { Clock, Code2, Calendar, Users } from "lucide-react";

/* ============================= */
/* INTERVIEW CATEGORIES */
/* ============================= */

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

/* ============================= */
/* TIME SLOTS */
/* ============================= */

export const TIME_SLOTS = [
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "12:00","12:30","13:00","13:30","14:00","14:30",
  "15:00","15:30","16:00","16:30","17:00",
];

/* ============================= */
/* QUICK ACTIONS */
/* ============================= */

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

/* ============================= */
/* LANGUAGES */
/* ============================= */

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "public/javascript.png" },
  { id: "python", name: "Python", icon: "public/python.png" },
  { id: "java", name: "Java", icon: "public/java.png" },
  { id: "cpp", name: "C++", icon: "public/cpp.png" },
  { id: "c", name: "C", icon: "public/c.png" },
  { id: "go", name: "Go", icon: "public/go.png" },
  { id: "rust", name: "Rust", icon: "/rust.png" },
] as const;

export type LanguageId = typeof LANGUAGES[number]["id"];

/* ============================= */
/* CODE QUESTIONS */
/* ============================= */

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: Record<LanguageId, string>;
  constraints?: string[];
}

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution
}`,
      python: `def two_sum(nums, target):
    # Write your solution
    pass`,
      java: `class Solution {
  public int[] twoSum(int[] nums, int target) {
      
  }
}`,
      cpp: `#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {

}`,
      c: `#include <stdio.h>

int* twoSum(int* nums, int numsSize, int target) {

}`,
      go: `package main

func twoSum(nums []int, target int) []int {

}`,
      rust: `impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        
    }
}`,
    },
  },

  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string in-place.",
    examples: [
      {
        input: '["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {

}`,
      python: `def reverse_string(s):
    pass`,
      java: `class Solution {
  public void reverseString(char[] s) {

  }
}`,
      cpp: `#include <vector>
using namespace std;

void reverseString(vector<char>& s) {

}`,
      c: `#include <stdio.h>

void reverseString(char* s, int size) {

}`,
      go: `package main

func reverseString(s []byte) {

}`,
      rust: `impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {

    }
}`,
    },
  },

  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer x, return true if x is a palindrome.",
    examples: [
      {
        input: "121",
        output: "true",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {

}`,
      python: `def is_palindrome(x):
    pass`,
      java: `class Solution {
  public boolean isPalindrome(int x) {

  }
}`,
      cpp: `class Solution {
public:
    bool isPalindrome(int x) {

    }
};`,
      c: `#include <stdbool.h>

bool isPalindrome(int x) {

}`,
      go: `package main

func isPalindrome(x int) bool {

}`,
      rust: `impl Solution {
    pub fn is_palindrome(x: i32) -> bool {

    }
}`,
    },
  },
];

/* ============================= */

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
