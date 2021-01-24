var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
{
  "args": {
    "?q=": "wdc-grem:din21:54760411!search-grem-details?masking=true", 
    "Strict-Transport-Security": "max-age=31536000", 
    "alt-svc": "h3-29=\":443\"; ma=2592000,h3-T051=\":443\"; ma=2592000,h3-Q050=\":443\"; ma=2592000,h3-Q046=\":443\"; ma=2592000,h3-Q043=\":443\"; ma=2592000,quic=\":443\"; ma=2592000; v=\"46,43\""
  }, 
  "data": "Property", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "application/json", 
    "Accept-Language": "en-us", 
    "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate", 
    "Content-Length": "0", 
    "Host": "httpbin.org", 
    "User-Agent": "origin", 
    "X-Amzn-Trace-Id": "Root=1-600dc6a4-3056642d35c888de0b7d6ae9"
  }, 
  "json": null, 
  "method": "origin", 
  "origin": "origin", 
  "url": "https://httpbin.org/anything?%3Fq%3D=wdc-grem:din21:54760411!search-grem-details%3Fmasking%3Dtrue&Strict-Transport-Security=max-age%3D31536000&alt-svc=h3-29%3D\":443\"%3B ma%3D2592000,h3-T051%3D\":443\"%3B ma%3D2592000,h3-Q050%3D\":443\"%3B ma%3D2592000,h3-Q046%3D\":443\"%3B ma%3D2592000,h3-Q043%3D\":443\"%3B ma%3D2592000,quic%3D\":443\"%3B ma%3D2592000%3B v%3D\"46,43\""
 "request-method": "Headers" , "body"
arn:aws:s3:us-east-2:239443081579:accesspoint/access-endpoint
680852e0b7949a1ea58191259b6d6c3a4040a1eb1b070743f530eff52122b641
http://acs.amazonaws.com/groups/global/AllUsers
http://acs.amazonaws.com/groups/global/AuthenticatedUsers
Request method: POST
Accept: */*
content-type: application/x-www-form-urlencoded
User-Agent: GitHub-Hookshot/301c57e
X-GitHub-Delivery: 30bfc4e0-5c08-11eb-9025-0791f047c57f
X-GitHub-Event: ping
X-GitHub-Hook-ID: 276737378
X-GitHub-Hook-Installation-Target-ID: 331300672
X-GitHub-Hook-Installation-Target-Type: repository-Payload
{
    "Effect": "Allow",
    "Principal": {
        "Service": "storage-lens.s3.amazonaws.com"
    },
    "Action": "s3:PutObject",
    "Resource": [
        "arn:aws:s3:::reyhan-data/StorageLens/239443081579/*"
    ],
    "Condition": {
        "StringEquals": {
            "s3:x-amz-acl": "bucket-owner-full-control",
            "aws:SourceAccount": "239443081579",
            "aws:SourceArn": "arn:aws:s3:us-east-2:239443081579:storage-lens/dash"
        }
    }
}
{
    "Version": "2012-10-17",
    "Id": "S3-Console-Auto-Gen-Policy-1611303496784",
    "Statement": [
        {
            "Sid": "S3PolicyStmt-DO-NOT-MODIFY-1611303492268",
            "Effect": "Allow",
            "Principal": {
                "Service": "s3.amazonaws.com"
            },
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::reyhan-data/*",
            "Condition": {
                "StringEquals": {
                    "aws:SourceAccount": "239443081579",
                    "s3:x-amz-acl": "bucket-owner-full-control"
                },
                "ArnLike": {
                    "aws:SourceArn": "arn:aws:s3:::reyhan-data"
                }
            }
        },
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "storage-lens.s3.amazonaws.com"
            },
            "Action": "s3:PutObject",
            "Resource": [
                "arn:aws:s3:::reyhan-data/StorageLens/239443081579/*"
            ],
            "Condition": {
                "StringEquals": {
                    "s3:x-amz-acl": "bucket-owner-full-control",
                    "aws:SourceAccount": "239443081579",
                    "aws:SourceArn": "arn:aws:s3:us-east-2:239443081579:storage-lens/dash"
                }
            }
        }
    ]
}
{
    "Id": "S3-Console-Auto-Gen-Policy-1611303496784",
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "S3PolicyStmt-DO-NOT-MODIFY-1611303492268",
            "Effect": "Allow",
            "Principal": {
                "Service": "s3.amazonaws.com"
            },
            "Action": [
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::reyhan-data/*"
            ],
            "Condition": {
                "ArnLike": {
                    "aws:SourceArn": [
                        "arn:aws:s3:::reyhan-data"
                    ]
                },
                "StringEquals": {
                    "aws:SourceAccount": [
                        "239443081579"
                    ],
                    "s3:x-amz-acl": "bucket-owner-full-control"
                }
            }
        }
    ]
}
{
    "Version": "2012-10-17",
    "Id": "S3-Console-Auto-Gen-Policy-1611303496784",
    "Statement": [
        {
            "Sid": "S3PolicyStmt-DO-NOT-MODIFY-1611303492268",
            "Effect": "Allow",
            "Principal": {
                "Service": "s3.amazonaws.com"
            },
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::reyhan-data/*",
            "Condition": {
                "StringEquals": {
                    "aws:SourceAccount": "239443081579",
                    "s3:x-amz-acl": "bucket-owner-full-control"
                },
                "ArnLike": {
                    "aws:SourceArn": "arn:aws:s3:::reyhan-data"
                }
            }
        }
    ]
}
{
  "zen": "Design for failure.",
  "hook_id": 276737378,
  "hook": {
    "type": "Repository",
    "id": 276737378,
    "name": "web",
    "active": true,
    "events": [
      "push"
    ],
    "config": {
      "content_type": "form",
      "insecure_ssl": "0",
      "url": "https://api.github.com/repos/authorizations/index/hooks/276737219/test"
    },
    "updated_at": "2021-01-21T16:46:21Z",
    "created_at": "2021-01-21T16:46:21Z",
    "url": "https://api.github.com/repos/authorizations/index/hooks/276737378",
    "test_url": "https://api.github.com/repos/authorizations/index/hooks/276737378/test",
    "ping_url": "https://api.github.com/repos/authorizations/index/hooks/276737378/pings",
    "last_response": {
      "code": null,
      "status": "unused",
      "message": null
    }
  },
  "repository": {
    "id": 331300672,
    "node_id": "MDEwOlJlcG9zaXRvcnkzMzEzMDA2NzI=",
    "name": "index",
    "full_name": "authorizations/index",
    "private": true,
    "owner": {
      "login": "authorizations",
      "id": 77589380,
      "node_id": "MDQ6VXNlcjc3NTg5Mzgw",
      "avatar_url": "https://avatars.githubusercontent.com/u/77589380?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/authorizations",
      "html_url": "https://github.com/authorizations",
      "followers_url": "https://api.github.com/users/authorizations/followers",
      "following_url": "https://api.github.com/users/authorizations/following{/other_user}",
      "gists_url": "https://api.github.com/users/authorizations/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/authorizations/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/authorizations/subscriptions",
      "organizations_url": "https://api.github.com/users/authorizations/orgs",
      "repos_url": "https://api.github.com/users/authorizations/repos",
      "events_url": "https://api.github.com/users/authorizations/events{/privacy}",
      "received_events_url": "https://api.github.com/users/authorizations/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/authorizations/index",
    "description": "Protected Securing DNS",
    "fork": false,
    "url": "https://api.github.com/repos/authorizations/index",
    "forks_url": "https://api.github.com/repos/authorizations/index/forks",
    "keys_url": "https://api.github.com/repos/authorizations/index/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/authorizations/index/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/authorizations/index/teams",
    "hooks_url": "https://api.github.com/repos/authorizations/index/hooks",
    "issue_events_url": "https://api.github.com/repos/authorizations/index/issues/events{/number}",
    "events_url": "https://api.github.com/repos/authorizations/index/events",
    "assignees_url": "https://api.github.com/repos/authorizations/index/assignees{/user}",
    "branches_url": "https://api.github.com/repos/authorizations/index/branches{/branch}",
    "tags_url": "https://api.github.com/repos/authorizations/index/tags",
    "blobs_url": "https://api.github.com/repos/authorizations/index/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/authorizations/index/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/authorizations/index/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/authorizations/index/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/authorizations/index/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/authorizations/index/languages",
    "stargazers_url": "https://api.github.com/repos/authorizations/index/stargazers",
    "contributors_url": "https://api.github.com/repos/authorizations/index/contributors",
    "subscribers_url": "https://api.github.com/repos/authorizations/index/subscribers",
    "subscription_url": "https://api.github.com/repos/authorizations/index/subscription",
    "commits_url": "https://api.github.com/repos/authorizations/index/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/authorizations/index/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/authorizations/index/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/authorizations/index/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/authorizations/index/contents/{+path}",
    "compare_url": "https://api.github.com/repos/authorizations/index/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/authorizations/index/merges",
    "archive_url": "https://api.github.com/repos/authorizations/index/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/authorizations/index/downloads",
    "issues_url": "https://api.github.com/repos/authorizations/index/issues{/number}",
    "pulls_url": "https://api.github.com/repos/authorizations/index/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/authorizations/index/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/authorizations/index/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/authorizations/index/labels{/name}",
    "releases_url": "https://api.github.com/repos/authorizations/index/releases{/id}",
    "deployments_url": "https://api.github.com/repos/authorizations/index/deployments",
    "created_at": "2021-01-20T12:30:07Z",
    "updated_at": "2021-01-21T16:35:24Z",
    "pushed_at": "2021-01-21T16:35:21Z",
    "git_url": "git://github.com/authorizations/index.git",
    "ssh_url": "git@github.com:authorizations/index.git",
    "clone_url": "https://github.com/authorizations/index.git",
    "svn_url": "https://github.com/authorizations/index",
    "homepage": null,
    "size": 431,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "PHP",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "q="
  },
  "sender": {
    "login": "authorizations",
    "id": 77589380,
    "node_id": "MDQ6VXNlcjc3NTg5Mzgw",
    "avatar_url": "https://avatars.githubusercontent.com/u/77589380?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/authorizations",
    "html_url": "https://github.com/authorizations",
    "followers_url": "https://api.github.com/users/authorizations/followers",
    "following_url": "https://api.github.com/users/authorizations/following{/other_user}",
    "gists_url": "https://api.github.com/users/authorizations/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/authorizations/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/authorizations/subscriptions",
    "organizations_url": "https://api.github.com/users/authorizations/orgs",
    "repos_url": "https://api.github.com/users/authorizations/repos",
    "events_url": "https://api.github.com/users/authorizations/events{/privacy}",
    "received_events_url": "https://api.github.com/users/authorizations/received_events",
    "type": "User",
    "site_admin": false
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
