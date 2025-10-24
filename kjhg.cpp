#include <bits/stdc++.h>
using namespace std;

using ll = long long;
using vi = vector<ll>;
using vl = vector<ll>;
using pii = pair<int, int>;
using pll = pair<ll, ll>;
using vpii = vector<pii>;
using vpll = vector<pll>;

void solve() {
    ll n;
    cin>>n;
    string s;
    cin>>s;
    ll c=0;
    vector <ll> ans;
    for(ll i=0;i<n;i++){
        if(s[i]=='('){
            c++;
        }
        else{
            c--;
        }
        if(c<0){
            ans.push_back(c);
        }
    }
    ll p = *min_element(ans.begin(), ans.end());
    cout<<-1*p<<endl;
    
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    ll t;
    cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
