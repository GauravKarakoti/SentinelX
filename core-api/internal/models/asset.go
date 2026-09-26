package models

import (
	"time"
)

// Asset represents a discovered target in the environment
type Asset struct {
	ID        string    `json:"id"`
	Type      string    `json:"type"` // e.g., Domain, IP, CloudResource
	Target    string    `json:"target"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	
	// TODO: Add fields for owner, criticality, tags, etc.
}

// Vulnerability represents a security finding
type Vulnerability struct {
	ID          string `json:"id"`
	AssetID     string `json:"asset_id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Severity    string `json:"severity"`
	
	// TODO: Add fields for CVSS score, remediation steps, status (open/closed), etc.
}